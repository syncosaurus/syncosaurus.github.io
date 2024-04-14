# Authentication

The Syncosaurus framework supports token-based authentication. JWTs are commonly utilized, but other types of token-based authentication like OAuth can be used as well.

## Setup

In order to implement authentication, you need two components:

- a token(s) or preferably a library or service that can generate new tokens
- an authentication service that verifies the validity of tokens

### `auth` token

To use a token, pass it to the `auth` parameter of the `Syncosaurus` constructor:

```js
import mutators from './mutators.js';

const synco = new Syncosaurus({
  mutators,
  userID: uuidv4(),
  server: import.meta.env.VITE_DO_URL,
  // Pass your authentication token here
  auth: "E3B6CD6A-1EDC-49B8-B2CF-7372583145A6",
});
```

### `authHandler.js`

Next, an `authHandler` function needs to be defined:

```js
const authServerUrl = `https://www.myAuthServer.com`;

export default async function authHandler(token) {
  try {
    const response = await fetch(`${authServerUrl}/verify?token=${token}`);
    const { payload } = response.json();
    const { userID } = payload;
    return userID;
  } catch (error) {
    console.error(error);
  }
}
```

Note that in order for your Syncosaurus server to correctly read, access, and verify your authentication tokens, the authentication handler function `authHandler` must adhere to the following requirements:
- The function must be named `authHandler`
- The function must be placed in the `src` subdirectory of your Syncosaurus project. Do not place `authHandler.js` in a subdirectory of the `src` directory.
- `authHandler.js` must be a module that exports the `authHandler` function as its default export.

Both the `auth` token and the `authHandler` function need to be correctly defined and appropriately handle errors in order for Syncosaurus to correctly implement authentication in your application.

By default, the Syncosaurus server will reject a request if the `authHandler` throws any type of error.
