---
sidebar_position: 1
---

# Rooms

The primary unit of collaboration within a Syncosaurus application is the **room**, a central coordination point and data store location. Much like a physical meeting room may serve as a hub for multiple individuals to communicate and exchange information and ideas, a room in Syncosaurus serves as a hub for users of a collaborative application (known as **clients**) to share updates and access the same data. In both scenarios, any update sent by any individual within a room may be received by all individuals present within the room, and any individual in the room also has access to the room's shared data (assuming they have permission to do so.) As with an individual moving in the physical world, a client in a collaborative web application can also move between different rooms, which often has its own features and rules.

The application developer is ultimately responsible for defining these room attributes and how they align with the attributes of clients entering, collaborating, and leaving those rooms. Let's illustrate this idea with an example. Let's say we have an e-learning platform on which teachers can host lectures and discussions in different rooms. A music room could have a chord visualization feature, while a statistics course could come with a specialized charting widget. Room client attributes need to be considered in conjunction with these features: imagine if students were given the same permissions as instructors. A music class could easily become a cacophonous zoo, while the chaos level of a statistics class over time might start to resemble the trajectory of a jet taking off to the moon.

In Syncosaurus, the room name is specified by passing it to the `launch` method of a `Syncosaurus` instance:

```js title="/src/components/App.jsx"
import mutators from './mutators.js';

const synco = new Syncosaurus({
  userID: "my-user-id",
  server: "https://my-cool-app.workers.dev",
  auth: "E3B6CD6A-1EDC-49B8-B2CF-7372583145A6",
  mutators,
});

//highlight-next-line
synco.launch('my-room-name');
```
