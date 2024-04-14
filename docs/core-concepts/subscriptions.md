# Subscriptions

A **subscription** allows clients to monitor if and when changes occur to the shared state of a room, regardless if the source of a change is local or from the authoritative server.

A **query** is a request for a specific type of subscription, and works hand-in-hand with subscriptions, allowing for customization of what state changes are being monitored. Queries are able to filter, aggregate and transform the shared state, or only portions of the shared state, to enable more granular application behavior and logic. These abilities are non-mutating and do not affect the shared application state, as it is only the server that can dictate final changes to shared state.

At the implementation level, a *subscription* is represented by the return value of `useSubscribe`, a custom React hook that uses the [useState](https://react.dev/reference/react/useState) React hook  to monitor data from the local client state. What an update to this monitored data occurs, associated UI components re-renders with this refreshed data. At the implementation level, a *query* is a developer-defined function, whose return value dictates what is considered a subscription update. Whenever a query's return value changes, its subscription is activated, and UI components that are connected to that subscription are updated.

Here is a simple implementation of a subscription and its query:

```javascript
const count = useSubscribe(synco, (tx) => tx.get('count'), 0)
```

Here, we call the `useSubscribe` hook, and pass in three arguments:

- The first argument is always a `Syncosaurus` instance, which has access to the local client state and the complete list of active subscriptions.
- The second argument is our *query*. The *query* function must be defined with `tx` as its only parameter. This `tx` parameter is what allows a query and subscription to monitor the local client state for their specified changes.
- The third argument is the initial starting value. If there are not yet changes to the local state that is relevant to the subscription, then the `useSubscribe` hook will return this initial starting value.
