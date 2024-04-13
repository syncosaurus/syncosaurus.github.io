# Authentication

## Authentication

The Syncosaurus framework supports token-based authentication. JWTs are commonly utilized, but other types of token-based authentication like OAuth can be used as well.

### Setup

In order to implement authentication, you need two components:

- a token(s) or preferably a library or service that can generate new tokens
- an authentication service that verifies the validity of tokens

#### `auth` token

To use a token, pass it to the `auth` parameter of the `Syncosaurus` constructor:

IMAGE WAS HERE

#### `authHandler.js`

Next, an `authHandler` function needs to be defined:

IMAGE WAS HERE

Note that in order for your Syncosaurus server to correctly read, access, and verify your authentication tokens, the authentication handler function `authHandler` must adhere to the following requirements:
- The function must be named `authHandler`
- The function must be placed in the `src` subdirectory of your Syncosaurus project. Do not place `authHandler.js` in a subdirectory of the `src` directory.
- `authHandler.js` must be a module that exports the `authHandler` function as its default export.

Both the `auth` token and the `authHandler` function need to be correctly defined and appropriately handle errors in order for Syncosaurus to correctly implement authentication in your application.

By default, the Syncosaurus server will reject a request if the `authHandler` throws any type of error.

For an example of authentication implemented in a Syncosaurus application, see here.

WIP