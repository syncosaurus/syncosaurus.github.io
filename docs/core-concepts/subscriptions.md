# Subscriptions

A **subscription** is what allows clients to monitor if and when changes occur to the shared state of a room, regardless if the source of a change is local or from the authoritative server. **Queries** work hand-in-hand with subscriptions, allowing for a customization of what state changes are being monitored. Queries are able to filter, aggregate and transform the shared state, or only portions of the shared state, to enable more granular application behavior and logic. These abilities are non-mutating and do not affect the shared application state, as it is only the server that can dictate final changes to shared state.

A subscription is a custom React hook (`useSubscribe`) that uses the React `useState` hook under the hood to read data from the local store and re-render components when updates to the value(s) for a specific key or set of keys in the local storage occur. The key or set of keys that a subscription watches for updates to their values (aka a watchlist, ) and are defined in the query argument of the `useSubscribe` hook. A query is a developer-defined function that defines the set of keys in the watchlist and it can also perform additional logic to transform the data before it is returned and re-rendered by the React code. When a query is executed, a `readTransaction` is created so any key provided to `has` or `get` or any of the keys returned by the `scan` method end up in the watchlist. Note that `useSubscribe` takes two additional arguments, the `syncosaurus` instance and an initial state for the value (like the one provided to `useState` when using it directly in a React application).

Here is an example mutator definition for the same counter above:

```javascript
const count = useSubscribe(synco, (tx) => tx.get('count'), 0)
```

## <a name="deltaupdates"></a>Delta Updates

Delta updates are a list of idempotent updates run by each client to bring it up to date with the server. Delta updates have two forms that correspond to the `WriteTransaction` write methods `set` and `delete`:
- `put` which informs a client to update the value of a certain key in its local store
- `del` which informs a client to remove the key (and therefore value) from its local store