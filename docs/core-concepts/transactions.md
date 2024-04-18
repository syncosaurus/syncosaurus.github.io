---
sidebar_position: 2
---

# Transactions

A **transaction** represents a single update, which can be either from a client to the server, or the server to a client.

In a Syncosaurus application, since the server is the authority, every transaction must be confirmed by the server before being broadcasted to other clients in a room.

A transaction, as an instance of the `transaction` class, consists of:
- methods that allow mutators and queries to update and read from the local client state, key-value store
- metadata on the transaction it represents, specifically *when* and *how* the application state should be updated

In Syncosaurus, transactions are categorized as either *read transactions* or *write transactions*. As their names imply, transactions are either observing or changing a specified part of the shared application state.

It is specifically through *write transactions* that [mutations](https://syncosaurus.github.io/docs/core-concepts/mutators) are applied to the shared state of a collaborative application.
