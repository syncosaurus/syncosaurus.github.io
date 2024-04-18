---
sidebar_position: 1
---

# Rooms

The primary unit of collaboration within a Syncosaurus application is the **room**, a central coordination point and data store location. Much like a physical meeting room may serve as a hub for multiple individuals to communicate and exchange information and ideas, a room in Syncosaurus serves as a hub for users of a collaborative application (known as *clients*) to share updates and access the same data. In both scenarios, any update sent by any individual within a room may be received by all individuals present within the room, and any individual in the room also has access to the room's shared data (assuming they have permission to do so.) As with an individual moving in the physical world, a client in a collaborative web application can also move between different rooms, which often has its own features and rules. The application developer is ultimately responsible for determining these room attributes and how they align with the attributes of clients entering, collaborating, and leaving those rooms.

In Syncosaurus, the room name is specified by passing it to the `launch` method of a `Syncosaurus` instance:

```js
import mutators from './mutators.js';

const synco = new Syncosaurus({
  mutators,
  userID: "my-user-id",
  server: "https://my-cool-app.workers.dev",
  auth: "E3B6CD6A-1EDC-49B8-B2CF-7372583145A6",
});

synco.launch('my-room-name');
```
