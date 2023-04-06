# `lookup_accounts`

Fetch one or more accounts by their `id`s.

## Event

An [`id`](../accounts.md#id) belonging to a [`Account`](../accounts.md).

## Result

- If the account exists, return the [`Account`](../accounts.md).
- If the account does not exist, return nothing.

## Client libraries

For language-specific docs see:

* [Looking up accounts using the Java library](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/java#account-lookup)
* [Looking up accounts using the Go library](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/go#account-lookup)
* [Looking up accounts using the Node.js library](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/clients/node#account-lookup)

## Internals

If you're curious and want to learn more, you can find the source code
for creating an account in
[src/state_machine.zig](https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/state_machine.zig). Search
for `fn execute_lookup_accounts(`.
