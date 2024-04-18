---
sidebar_position: 3
---

# Mutators

A **mutator** is a Javascript function, defined by the developer, that defines logic to transform the shared application state through a [transaction](https://syncosaurus.github.io/docs/core-concepts/transactions). A key feature of mutators is that *they run twice*:

- Mutators are first run on the client against the client's local state, and the client's user interface updates immediately. The mutation does not wait for a server response. This is intentional, and is also vital in keeping the client's perceived response times low and the user experience smooth. Because these mutators have not yet been confirmed by the authoritative server, the mutations made by this first run of mutators are known as optimistic mutations. 
- Mutators are then run by the server against the server's state, which is the authoritative state. Although the defined mutators are the same, because the mutators are now run against the server's state instead of the client's state, the result of the mutation may be different. This occurrence is a normal part of the syncing process. When the server broadcasts its authoritative updates and if the client state with applied optimistic mutations is different than the authoritative state sent by the server, Syncosaurus will automatically roll back its applied optimistic mutations and apply updates to match the server's authoritative state.

Because mutators are just high-level Javascript functions, the developer gains a high level of flexibility and control in how and when updates should be mutated. Mutators can be used to not only modify the shared state of a collaborative application. These mutators can also be used to selectively aggregate, merge, and/or delete different pieces of the shared state, as well as to implement custom application logic or fine-grained authorization.

The function `increment` below is an example of a mutator:

```js title="/src/mutators.js"
function increment(tx, { key, delta }) {
  const prev = tx.get(key);
  const next = (prev ?? 0) + delta;
  tx.set(key, next);
}
```

The mutator function must take `tx` as its first parameter. The `tx` object (which stands for [transaction](https://syncosaurus.github.io/docs/core-concepts/transactions)) has read and write access to the local state, a series of key-value pairs. Through this access, the mutator function is able to *locally* transform a the local state first on the client-side. On the authoritative server, the mutator function can run again, where the mutation now transforms the *authoritative* state.
