---
sidebar_position: 5
---

# Presence

As its name implies, **presence** allows for information on connected clients to be broadcast. Data like who is currently connected in a room, where each client's cursor is in the app, or the latest status update for each client are "ephemeral", *lasting only as long as that client is connected.* Thus, since this data is by definition temporary, these updates should be treated differently from client updates that may affect the shared application state. Presence data is effectively received, possibly transformed, and then immediately broadcasted.

A key feature of collaborative applications is presence data which lets each user know who is collaborating on the document and their intent. In many web applications, this is often implemented by displaying avatars indicating who is currently looking at the document and/or displaying the cursors of other clients. Because the data for these features is ephemeral and inconsequential to the state of the application, it is treated differently than other state-related data in the Syncosaurus Framework.

To implement presence, utilize the `usePresence` hook, which takes a `Syncosaurus` instance as its only argument.
