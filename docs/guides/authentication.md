---
sidebar_position: 1
---

# Authentication

The Syncosaurus framework supports token-based authentication. JSON web tokens are utilized in the instructions below, but other token formats like [basic authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) and [OAuth 2.0](https://blog.postman.com/what-is-oauth-2-0/) can also be used.

## Setup

### `auth` token

To use a token, you can directly pass a *token string*  to the `Syncosaurus` constructor as the `auth` key's value:

```js
import mutators from './mutators.js';

const synco = new Syncosaurus({
  mutators,
  userID: "my--user-id",
  server: "https://my-cool-app.workers.dev",
  // Pass your authentication token here
  auth: "E3B6CD6A-1EDC-49B8-B2CF-7372583145A6",
});
```

 You can also pass an *asynchronous function* that returns a token string to the `Syncosaurus` constructor as the `auth` key's value:

```js
import mutators from './mutators.js';
import getToken from './auth-client.js';

const synco = new Syncosaurus({
  mutators,
  userID: "my--user-id",
  server: "https://my-cool-app.workers.dev",
  // Pass your async fn that returns an auth token here
  auth: async () => return await getToken(),
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

### Configuration

Note that in order for your Syncosaurus server to correctly read, access, and verify your authentication token(s), the authentication handler function `authHandler` must adhere to the following requirements:
- The function must be named `authHandler`
- The function must be placed in the `src` subdirectory of your Syncosaurus project. Do not place `authHandler.js` in a subdirectory of the `src` directory.
- `authHandler.js` must be a module that exports the `authHandler` function as its default export.

Both the `auth` token and the `authHandler` function need to be correctly defined and appropriately handle errors in order for Syncosaurus to correctly implement authentication in your application.
- If the above requirements are not met, then authentication will not be configured, and will be skipped.
- However, the Syncosaurus server will reject a request if:
	- `auth` is either a string or function and `authHandler` is a function, and the `authHandler` function throws any type of error.

If your application correctly follows the above steps and requirements, then your application will have authentication enabled upon successful deployment.
