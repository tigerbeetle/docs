---
title: Java
---

This file is generated by
[src/clients/docs_generate.zig](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/docs_generate.zig).
# tigerbeetle-java

The TigerBeetle client for Java.

[![javadoc](https://javadoc.io/badge2/com.tigerbeetle/tigerbeetle-java/javadoc.svg)](https://javadoc.io/doc/com.tigerbeetle/tigerbeetle-java)

[![maven-central](https://img.shields.io/maven-central/v/com.tigerbeetle/tigerbeetle-java)](https://central.sonatype.com/namespace/com.tigerbeetle)

### Prerequisites

Linux >= 5.6 is the only production environment we
support. But for ease of development we also support macOS.
* Java >= 11
* Maven >= 3.6 (not strictly necessary but it's what our guides assume)

## Setup

First, create `pom.xml` and copy this into it:

```java
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>api</groupId>
  <artifactId>api</artifactId>
  <version>1.0-SNAPSHOT</version>

  <properties>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <compilerArgs>
            <arg>-Xlint:all,-options,-path</arg>
          </compilerArgs>
        </configuration>
      </plugin>

      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>exec-maven-plugin</artifactId>
        <version>1.6.0</version>
        <configuration>
          <mainClass>Main</mainClass>
        </configuration>
      </plugin>
    </plugins>
  </build>

  <dependencies>
    <dependency>
      <groupId>com.tigerbeetle</groupId>
      <artifactId>tigerbeetle-java</artifactId>
      <!-- Grab the latest commit from: https://repo1.maven.org/maven2/com/tigerbeetle/tigerbeetle-java/maven-metadata.xml -->
      <version>0.0.1-3431</version>
    </dependency>
  </dependencies>
</project> 
```

Run:

```console
$ mvn install
```

Now, create `src/main/java/Main.java` and copy this into it:

```java
package com.tigerbeetle.examples;

import com.tigerbeetle.*;

public final class Main {
    public static void main(String[] args) {
        System.out.println("Import ok!");
    }
}
```

Finally, build and run:

```console
$ mvn exec:java
```

Now that all prerequisites and dependencies are correctly set
up, let's dig into using TigerBeetle.

## Example projects

This document is primarily a reference guide to
the client. Below are various sample projects demonstrating
features of TigerBeetle.

* [Basic](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/java/samples/basic/): Create two accounts and
  transfer an amount between them.
* [Two-Phase Transfer](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/java/samples/two-phase/): Create two
  accounts and start a pending transfer between them, then
  post the transfer.
## Creating a Client

A client is created with a cluster ID and replica
addresses for all replicas in the cluster. The cluster
ID and replica addresses are both chosen by the system that
starts the TigerBeetle cluster.

Clients are thread-safe. But for better
performance, a single instance should be shared between
multiple concurrent tasks.

Multiple clients are useful when connecting to more than
one TigerBeetle cluster.

In this example the cluster ID is `0` and there are
three replicas running on ports `3001`, `3002`, and
`3003`.

```java
Client client = new Client(
  0,
  new String[] {"3001", "3002", "3003"}
);
```

If you create a `Client` like this, don't forget to call
`client.close()` when you are done with it. Otherwise you
can use the
[try-with-resources](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html)
syntax:
```java
try (var client = new Client(...)) {
  // Use client
} catch (Exception e) {
  // Handle exception
}
```

The following are valid addresses:
* `3000` (interpreted as `127.0.0.1:3000`)
* `127.0.0.1:3000` (interpreted as `127.0.0.1:3000`)
* `127.0.0.1` (interpreted as `127.0.0.1:3001`, `3001` is the default port)

## Creating Accounts

See details for account fields in the [Accounts
reference](https://docs.tigerbeetle.com/reference/accounts).

```java
AccountBatch accounts = new AccountBatch(1);
accounts.add();
accounts.setId(137);
accounts.setUserData(UInt128.asBytes(new java.math.BigInteger("92233720368547758070")));
accounts.setLedger(1);
accounts.setCode(718);
accounts.setFlags(0);

CreateAccountResultBatch accountErrors = client.createAccounts(accounts);
```

The 128-bit fields like `id` and `user_data` have a few
overrides to make it easier to integrate. You can either
pass in a long, a pair of longs (least and most
significant bits), or a `byte[]`.

There is also a `com.tigerbeetle.UInt128` helper with static
methods for converting 128-bit little-endian unsigned integers
between instances of `long`, `UUID`, `BigInteger` and `byte[]`.

### Account Flags

The account flags value is a bitfield. See details for
these flags in the [Accounts
reference](https://docs.tigerbeetle.com/reference/accounts#flags).

To toggle behavior for an account, combine enum values stored in the
`AccountFlags` object with bitwise-or:

* `AccountFlags.LINKED`
* `AccountFlags.DEBITS_MUST_NOT_EXCEED_CREDITS`
* `AccountFlags.CREDITS_MUST_NOT_EXCEED_CREDITS`

For example, to link two accounts where the first account
additionally has the `debits_must_not_exceed_credits` constraint:

```java
accounts = new AccountBatch(3);

// First account
accounts.add();
// Code to fill out fields for first account
accounts.setFlags(AccountFlags.LINKED | AccountFlags.DEBITS_MUST_NOT_EXCEED_CREDITS);

// Second account
accounts.add();
// Code to fill out fields for second account

accountErrors = client.createAccounts(accounts);
```

### Response and Errors

The response is an empty array if all accounts were
created successfully. If the response is non-empty, each
object in the response array contains error information
for an account that failed. The error object contains an
error code and the index of the account in the request
batch.

See all error conditions in the [create_accounts
reference](https://docs.tigerbeetle.com/reference/operations/create_accounts).

```java
accounts = new AccountBatch(3);

// First account
accounts.add();
// Code to fill out fields for first account

// Second account
accounts.add();
// Code to fill out fields for second account

// Third account
accounts.add();
// Code to fill out fields for third account

accountErrors = client.createAccounts(accounts);
while (accountErrors.next()) {
    switch (accountErrors.getResult()) {
        case Exists:
            System.err.printf("Account at %d already exists.\n",
                accountErrors.getIndex());        
            break;

        default:
            System.err.printf("Error creating account at %d: %s\n",
                accountErrors.getIndex(),
                accountErrors.getResult());
            break;
    }
}
```

## Account Lookup

Account lookup is batched, like account creation. Pass
in all IDs to fetch. The account for each matched ID is returned.

If no account matches an ID, no object is returned for
that account. So the order of accounts in the response is
not necessarily the same as the order of IDs in the
request. You can refer to the ID field in the response to
distinguish accounts.

```java
IdBatch ids = new IdBatch(2);
ids.add(137);
ids.add(138);
accounts = client.lookupAccounts(ids);
```

## Create Transfers

This creates a journal entry between two accounts.

See details for transfer fields in the [Transfers
reference](https://docs.tigerbeetle.com/reference/transfers).

```java
TransferBatch transfers = new TransferBatch(1);
transfers.add();
transfers.setId(1);
transfers.setDebitAccountId(1);
transfers.setCreditAccountId(2);
transfers.setUserData(2);
transfers.setTimeout(0);
transfers.setLedger(1);
transfers.setCode(1);
transfers.setFlags(0);
transfers.setAmount(10);

CreateTransferResultBatch transferErrors = client.createTransfers(transfers);
```

### Response and Errors

The response is an empty array if all transfers were created
successfully. If the response is non-empty, each object in the
response array contains error information for an transfer that
failed. The error object contains an error code and the index of the
transfer in the request batch.

See all error conditions in the [create_transfers
reference](https://docs.tigerbeetle.com/reference/operations/create_transfers).

```java
while (transferErrors.next()) {
    switch (transferErrors.getResult()) {
        case ExceedsCredits:
            System.err.printf("Transfer at %d exceeds credits.\n",
                transferErrors.getIndex());        
            break;

        default:
            System.err.printf("Error creating transfer at %d: %s\n",
                transferErrors.getIndex(),
                transferErrors.getResult());
            break;
    }
}
```

## Batching

TigerBeetle performance is maximized when you batch
API requests. The client does not do this automatically for
you. So, for example, you *can* insert 1 million transfers
one at a time like so:

```java
for (int i = 0; i < transfers.length; i++) {
  TransferBatch batch = new TransferBatch(1);
  batch.add();
  batch.setId(transfers[i].getId());
  batch.setDebitAccountId(transfers[i].getDebitAccountId());
  batch.setCreditAccountId(transfers[i].getCreditAccountId());

  CreateTransferResultBatch errors = client.createTransfers(batch);
  // error handling omitted
}
```

But the insert rate will be a *fraction* of
potential. Instead, **always batch what you can**.

The maximum batch size is set in the TigerBeetle server. The default
is 8191.

```java
var BATCH_SIZE = 8191;
for (int i = 0; i < transfers.length; i += BATCH_SIZE) {
  TransferBatch batch = new TransferBatch(BATCH_SIZE);

  for (int j = 0; j < BATCH_SIZE && i + j < transfers.length; j++) {
    batch.add();
    batch.setId(transfers[i + j].getId());
    batch.setDebitAccountId(transfers[i + j].getDebitAccountId());
    batch.setCreditAccountId(transfers[i + j].getCreditAccountId());
  }

  CreateTransferResultBatch errors = client.createTransfers(batch);
  // error handling omitted
}
```

### Queues and Workers

If you are making requests to TigerBeetle from workers
pulling jobs from a queue, you can batch requests to
TigerBeetle by having the worker act on multiple jobs from
the queue at once rather than one at a time. i.e. pulling
multiple jobs from the queue rather than just one.

## Transfer Flags

The transfer `flags` value is a bitfield. See details for these flags in
the [Transfers
reference](https://docs.tigerbeetle.com/reference/transfers#flags).

To toggle behavior for an account, combine enum values stored in the
`TransferFlags` object with bitwise-or:

* `TransferFlags.NONE`
* `TransferFlags.LINKED`
* `TransferFlags.PENDING`
* `TransferFlags.POST_PENDING_TRANSFER`
* `TransferFlags.VOID_PENDING_TRANSFER`

For example, to link `transfer0` and `transfer1`:

```java
transfers = new TransferBatch(2);

// First transfer
transfers.add();
// Code to fill out fields for first transfer
transfers.setFlags(TransferFlags.LINKED);

// Second transfer
transfers.add();
// Code to fill out fields for second transfer
transferErrors = client.createTransfers(transfers);
```

### Two-Phase Transfers

Two-phase transfers are supported natively by toggling the appropriate
flag. TigerBeetle will then adjust the `credits_pending` and
`debits_pending` fields of the appropriate accounts. A corresponding
post pending transfer then needs to be sent to post or void the
transfer.

#### Post a Pending Transfer

With `flags` set to `post_pending_transfer`,
TigerBeetle will post the transfer. TigerBeetle will atomically roll
back the changes to `debits_pending` and `credits_pending` of the
appropriate accounts and apply them to the `debits_posted` and
`credits_posted` balances.

```java
transfers = new TransferBatch(1);

// First transfer
transfers.add();
// Code to fill out fields for first transfer
transfers.setFlags(TransferFlags.POST_PENDING_TRANSFER);
transferErrors = client.createTransfers(transfers);
```

#### Void a Pending Transfer

In contrast, with `flags` set to `void_pending_transfer`,
TigerBeetle will void the transfer. TigerBeetle will roll
back the changes to `debits_pending` and `credits_pending` of the
appropriate accounts and **not** apply them to the `debits_posted` and
`credits_posted` balances.

```java
transfers = new TransferBatch(1);

// First transfer
transfers.add();
// Code to fill out fields for first transfer
transfers.setFlags(TransferFlags.VOID_PENDING_TRANSFER);
transferErrors = client.createTransfers(transfers);
```

## Transfer Lookup

NOTE: While transfer lookup exists, it is not a flexible query API. We
are developing query APIs and there will be new methods for querying
transfers in the future.

Transfer lookup is batched, like transfer creation. Pass in all `id`s to
fetch, and matched transfers are returned.

If no transfer matches an `id`, no object is returned for that
transfer. So the order of transfers in the response is not necessarily
the same as the order of `id`s in the request. You can refer to the
`id` field in the response to distinguish transfers.

```java
ids = new IdBatch(2);
ids.add(1);
ids.add(2);
transfers = client.lookupTransfers(ids);
```

## Linked Events

When the `linked` flag is specified for an account when creating accounts or
a transfer when creating transfers, it links that event with the next event in the
batch, to create a chain of events, of arbitrary length, which all
succeed or fail together. The tail of a chain is denoted by the first
event without this flag. The last event in a batch may therefore never
have the `linked` flag set as this would leave a chain
open-ended. Multiple chains or individual events may coexist within a
batch to succeed or fail independently.

Events within a chain are executed within order, or are rolled back on
error, so that the effect of each event in the chain is visible to the
next, and so that the chain is either visible or invisible as a unit
to subsequent events after the chain. The event that was the first to
break the chain will have a unique error result. Other events in the
chain will have their error result set to `linked_event_failed`.

```java
transfers = new TransferBatch(10);

// An individual transfer (successful):
transfers.add();
transfers.setId(1);

// A chain of 4 transfers (the last transfer in the chain closes the chain with linked=false):
transfers.add();
transfers.setId(2); // Commit/rollback.
transfers.setFlags(TransferFlags.LINKED);

transfers.add();
transfers.setId(3); // Commit/rollback.
transfers.setFlags(TransferFlags.LINKED);

transfers.add();
transfers.setId(2); // Fail with exists
transfers.setFlags(TransferFlags.LINKED);

transfers.add();
transfers.setId(4); // Fail without committing

// An individual transfer (successful):
// This should not see any effect from the failed chain above.
transfers.add();
transfers.setId(2);

// A chain of 2 transfers (the first transfer fails the chain):
transfers.add();
transfers.setId(2);
transfers.setFlags(TransferFlags.LINKED);

transfers.add();
transfers.setId(3);

// A chain of 2 transfers (successful):
transfers.add();
transfers.setId(3);
transfers.setFlags(TransferFlags.LINKED);

transfers.add();
transfers.setId(4);

transferErrors = client.createTransfers(transfers);
```

## Development Setup

### On Linux and macOS

In a POSIX shell run:

```console
$ git clone https://github.com/tigerbeetledb/tigerbeetle
$ cd tigerbeetle
$ git checkout $GIT_SHA
$ cd src/clients/java
$ ./scripts/install.sh
$ [ "$TEST" = "true" ] && mvn test || echo "Skipping client unit tests"
```

### On Windows

Not yet supported.
