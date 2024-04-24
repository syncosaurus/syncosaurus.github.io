---
sidebar_position: 2
---

# Transactions

A **transaction** represents a single [client](rooms.md) update.

In a Syncosaurus application, since the server is the authority, the server must confirm every transaction before being broadcast to other clients in a room.

At the implementation level, a transaction consists of:
- methods that allow mutators and queries to update and read from the local client state, key-value store
- metadata on the transaction it represents, specifically *when* and *how* the application state should be updated

Transactions are categorized as either *read transactions* or *write transactions*. As their names imply, transactions are either observing or changing a specified part of the shared application state.

## Read Transactions

Read transactions are instances of the `ReadTransaction` class, and have access to the following methods:
  - `get` - returns the value for the key from the local store based on a given key
  - `has` - returns true if a given key exists in the local store
  - `isEmpty` - returns true if the local store is empty
  - `scan` - returns an object containing a subset of KV pairs from the local store where a developer-defined callback evaluates to true

[Subscription queries](subscriptions.md) utilize read transactions to monitor for changes in the shared state of a collaborative applications.

## Write Transactions

Write transations are instances of the `WriteTransaction` class, and have access to the listed `ReadTransaction` instance methods above, in addition to the `set` and `delete` methods:
  - `set` - updates the value of a given key in the local store
  - `delete` - deletes a given key (and therefore value) from the local store

[Mutations](mutators.md) are applied to the shared state of a collaborative application though write transactions.
