---
sidebar_position: 3
---

# State Sync

State sync synchronizes the state of a lagging/divergent replica with the healthy cluster.

State sync is used when when a lagging replica's log no longer intersects with the cluster's current log —
[WAL repair](./vsr.md#protocol-repair-wal) cannot catch the replica up.

(VRR refers to state sync as "state transfer", but we already have [transfers](../reference/transfers.md) elsewhere.)

In the context of state sync, "state" refers to:
1. the superblock manifest
2. the superblock free set
3. the superblock client sessions
4. the superblock `vsr_state.commit_min`
5. the superblock `vsr_state.commit_min_checksum`
6. the grid (LSM data; acquired blocks only)
7. client replies

However, state sync protocol itself only syncs the first 5.
6/7 are replicated after state sync protocol, driven by grid repair and the disk scrubber.

The target of state sync is the latest checkpoint of the healthy cluster.
When we catch up to the latest checkpoint (or very close to it), then we can transition back to a healthy state.

## Glossary

Replica roles:

- _syncing replica_: A replica performing state sync. (Any step within *1*-*9* of the [sync algorithm](#algorithm))
- _healthy replica_: A replica _not_ performing state sync — part of the active cluster.
- _divergent replica_: A replica with a checkpoint that is (and can never be) canonical.

Checkpoints:

- [_checkpoint id_/_checkpoint identifier_](#checkpoint-identifier): Uniquely identifies a particular checkpoint reproducibly across replicas.
- [_canonical checkpoint_](#canonical-checkpoint): Any checkpoint which either: _A_: has any ops committed atop it by the primary, or _B_: a majority quorum has reached.
- [_sync target_](#sync-target): The checkpoint identifier of the target of state sync. Every sync target is a canonical checkpoint.

## Algorithm

0. [Sync is needed](#0-scenarios).
1. [Trigger sync](#1-triggers).
2. Wait for non-grid commit operation to finish.
3. Wait for grid IO to finish. (See `Grid.cancel()`.)
4. Wait for a usable sync target to arrive. (Usually we already have one.)
5. [Request superblock trailers](#5-request-superblock-trailers).
6. Update superblock headers:
    - Bump `vsr_state.commit_min`/`vsr_state.commit_min_checksum` to the sync target op/op-checksum.
    - Bump `vsr_state.previous_checkpoint_id` to the checkpoint id that is previous to our sync target (i.e. it isn't _our_ previous checkpoint).
    - Bump `replica.commit_min`. (If `replica.commit_min` exceeds `replica.op`, transition to `status=recovering_head`).
    - Write the target checkpoint's trailers.
7. Request and write manifest log blocks. (Handled by [Grid Repair Protocol](./vsr.md#protocol-repair-grid).)
8. Request and write table blocks. (TODO: This step is not implemented yet.)
9. Done.

If a newer sync target is discovered during steps *4*-*8*, go to step *3*.

### 0: Scenarios

Scenarios requiring state sync:

1. A replica was down/partitioned/slow for a while and the rest of the cluster moved on.
  The lagging replica is too far behind to catch up via WAL repair.
2. A replica was just formatted and is being added to the cluster (i.e. via [reconfiguration](./vsr.md#protocol-reconfiguration)).
  The new replica is too far behind to catch up via WAL repair.
3. A replica's state diverged from the cluster ([storage nondeterminism](#storage-determinism)).

Causes of number 3:
- A storage determinism bug.
- An upgraded replica (e.g. a canary) running a different version of the code from the remainder of the cluster, which unexpectedly changes its history.
  (The change either has a bug or should have been gated behind a feature flag.)

### 1: Triggers

State sync is initially triggered by any of the following:

- The replica discovers the canonical checkpoint for its current wrap, and that it [doesn't match](#storage-determinism) its own current checkpoint.
- The replica receives a SV which indicates that it has lagged so far behind the cluster that its log cannot possibly intersect.
- `repair_sync_timeout` fires, and:
    - a WAL or grid repair is in progress and,
    - the replica's checkpoint is lagging behind the cluster's (far enough that the repair may never complete).

### 5: Request Superblock Trailers

The replica concurrently sends out three request messages, with the sync target identifier attached to each:

1. `command=request_sync_manifest`
2. `command=request_sync_free_set`
3. `command=request_sync_client_sessions`

Replicas with a matching checkpoint identifier reply (respectively) with:

1. `command=sync_manifest`
2. `command=sync_free_set`
3. `command=sync_client_sessions`

If a trailer is too large to fit in a message, the syncing replica requests it again, with a byte offset.

## Concepts
### Syncing Replica

Syncing replicas may:

- [write prepares to their WAL](#syncing-replicas-write-prepares-to-their-wal)
- assist with grid repair
- join new views
- send a `do_view_change`

Syncing replicas must not:

- [ack](#syncing-replicas-dont-ack-prepares)
- commit prepares
- be a primary

#### Syncing Replicas write prepares to their WAL.

When the replica completes state sync, an up-to-date WAL and journal allow it to quickly catch up (i.e. commit) to the current cluster state.

#### Syncing Replicas don't ack prepares.

If syncing replicas _did_ ack prepares:

Consider a cluster of 3 replicas:
- the _primary_,
- a _normal backup_, and
- a _syncing backup_.

1. _Primary_ prepares many ops...
2. _Syncing backup_ prepares and acknowledges all of those messages.
3. _Normal backup_ is partitioned — its not seeing any of these prepares.
4. _Primary_ is receiving `prepare_ok`s from the _syncing backup_, so it is committing.
5. _Primary_ eventually checkpoints.
6. (This cycle repeats — _primary_ keeps preparing/committing, _syncing backup_ keeps preparing, and _normal backup_ is still partitioned.)

But now _primary_ is so far ahead that the _normal backup_ needs to sync!
Having 2/3 replicas syncing means that a single grid-block corruption on the primary could make the cluster permanently unavailable.

### Checkpoint Identifier

A _checkpoint id_ is a hash of the superblock trailers.

A checkpoint identifier is attached to the following message types:
- `command=commit`: Current checkpoint identifier of sender.
- `command=ping`: Current checkpoint identifier of sender.
- `command=prepare_ok`: The attached checkpoint id is the checkpoint id during which the corresponding prepare was originally prepared.
- `command=request_sync_manifest`: Requested checkpoint identifier.
- `command=request_sync_free_set`: Requested checkpoint identifier.
- `command=request_sync_client_sessions`: Requested checkpoint identifier.
- `command=sync_manifest`: Current checkpoint identifier of sender.
- `command=sync_free_set`: Current checkpoint identifier of sender.
- `command=sync_client_sessions`: Current checkpoint identifier of sender.

TODO(Big headers): Add checkpoint identifier to `command=prepare` too, so that a backup cannot diverge by >1 checkpoint if it is partitioned from only `command=commit` and `commit=ping` messages.
(And once `prepare` holds the checkpoint identifier, can it be omitted on `prepare_ok`A? Just don't ack if different?)

### Canonical Checkpoint

A _canonical_ checkpoint is a checkpoint:
1. with an op committed atop it by the primary (discovery via `command=commit`), or
2. that a majority quorum of replicas have reached (discovery via `command=ping`), or
3. (when `R=2`: that a single replica has reached).

The primary ignores `command=prepare_ok`s which have a different checkpoint id attached than they expect.
This means that if a replica's history diverges (due to nondeterminism), the diverging replica is effectively excluded from participating in consensus until it has performed state sync.
See [Storage Determinism](#storage-determinism).

This bounds the "distance" that a history can diverge by.
Every checkpoint's previous (i.e. parent) checkpoint is canonical.

### Sync Target

A _sync target_ is the [checkpoint identifier](#checkpoint-identifier) of the checkpoint that the state sync is syncing towards.

Not all checkpoint identifiers are valid sync targets.

- Every sync target **must** be a [canonical checkpoint](#canonical-checkpoint).
  (TODO: Once prepares include the checkpoint identifier, this requirement can be removed.)
- Every sync target op **must** either:
  - be greater-than-or-equal-to the replica's current checkpoint op.
  - be equal to the replica's current checkpoint op, but with a different target id (if our checkpoint diverged).

### Storage Determinism

When everything works, storage is deterministic.
But we must tolerate non-determinism too, in case of bugs.

At the limit, all 6 replicas could diverge.
This puts the cluster in a very precarious position:
All it would take is a single corruption to be permanently unavailable!
(We need to pick one "winner", and we can't just read all of every single replica's disks to find which (if any) is completely intact).

So we must bound nondeterminism within our fault model.

We require that at least [`quorum_replication`](./vsr.md#quorums) histories are identical.
[Canonical Checkpoint](#canonical-checkpoint) describes how this can (in part, though not completely) be enforced automatically.
If more histories diverge, the cluster will be unavailable (unable to commit), and require operator intervention to recover (e.g. by cloning data files).

### Progress Tracking

If a state-syncing replica crashes before completing sync, we don't want to restart from scratch.
(This is mainly important for tables — the manifest is smaller.)

Progress is tracked implicitly: If a table index block is present on disk, we implicitly assume that all of its filter/data blocks have already been written too.
That is, "table index block in grid" implies "table's referenced data/filter blocks are in grid".

To enforce this invariant:
1. When syncing table blocks, don't write an index block until all of its data and filter blocks are written.
2. A history cannot diverge from the canonical history by more than one checkpoint.
3. A replica never syncs towards a checkpoint from its past.
