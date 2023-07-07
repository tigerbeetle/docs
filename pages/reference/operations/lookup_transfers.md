# `lookup_transfers`

Fetch one or more transfers by their `id`s.

## Event

An [`id`](../transfers.md#id) belonging to a [`Transfer`](../transfers.md).

## Result

- If the transfer exists, return the [`Transfer`](../transfers.md).
- If the transfer does not exist, return nothing.

## Client libraries

For language-specific docs see:

* [Looking up transfers using the .NET library](../../clients/dotnet.md#transfer-lookup)
* [Looking up transfers using the Java library](../../clients/java.md#transfer-lookup)
* [Looking up transfers using the Go library](../../clients/go.md#transfer-lookup)
* [Looking up transfers using the Node.js library](../../clients/node.md#transfer-lookup)

## Internals

If you're curious and want to learn more, you can find the source code
for creating an transfer in
[src/state_machine.zig](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/state_machine.zig). Search
for `fn execute_lookup_transfers(`.
