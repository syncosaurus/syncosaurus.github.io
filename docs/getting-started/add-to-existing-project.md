---
sidebar_position: 2
---

# Add to an Existing Project

To add Syncosaurus to an existing React-based project:

1. Navigate to the root directory of your application
2. Run the command `npx syncosaurus setup`

That's it! Make sure to correctly configure your Syncosaurus application before deployment - see here for details.

Note that Syncosaurus currently only supports applications built with either React or a React-based framework.

## Spin up a local development environment

A local development environment makes it significantly easier to rapidly iterate, test, and debug your application in a consistent, controlled setting. Syncosaurus comes built-in with a local Syncosaurus server.

If you added Syncosaurus to an existing project and are not using Vite as your build tool, run the same command with the `-b` or `-backendOnly` flag enabled:

```shell
npx syncosaurus dev -b
```

If your file structure adheres to Syncosaurus rules, and your configuration settings are correct, the localhost address with your designated port to your local Syncosaurus server will be displayed in the terminal output:

```shell
❯ npx syncosaurus dev -b
Checking for Syncosaurus installation...... found
Initializing local dev environment...... done!

--------------------------------------------------
🦖 Your local Syncosaurus dev server is ready at http://localhost:8787
Press 'x' to gracefully shut down the server
```

Make sure to update your `server` value in your Syncosaurus constructor calls in your application code:

```javascript
import mutators from './mutators.js';

const synco = new Syncosaurus({
	// update this value to the local Syncosaurus server URL
	server: "http://localhost:8787",
	userID: "my-user-id",
	auth: "4fJbGOWma=QEebX6H1X6AAe3/yok1R-fwKMqot5XOvxPU0YwI!sm8nQ!"
	mutators,
});
```

## Deploy your Syncosaurus project

When you are ready to deploy your Syncosaurus application, make sure the following requirements are first met:

1. Make sure that you are logged in to Cloudflare.
	1. You can check your login status with `syncosaurus whoami`
	2. If you are not logged in, run `syncosaurus login` and provide your Cloudflare credentials via OAuth or API token.
2. Navigate to your root directory of your project, which needs to have a `syncosaurus.json` configuration file.
3. Make sure your mutators are correctly defined in your `mutators.js` file, and your `mutators.js` file is located in the `src` sub-directory.
4. Make sure your authentication handler is correctly defined in your `authHandler.js` file, and your `authHandler.js` file is located in the `src` sub-directory.

Once the above requirements have been fulfilled, run the following command in your terminal:

```shell
npx syncosaurus deploy
```

If your application was configured correctly, the URL to your deployed application should be displayed in your terminal output, which will look akin to the output displayed below:

```shell
❯ npx syncosaurus deploy
 🦖 syncosaurus 0.7.1
--------------------------------------------------

Evolving your Syncosaurus server... done!

✅ Success! Your Syncosaurus server is available at
  https://my-cool-app.johnsmith.workers.dev
```

To deploy your frontend, simply add this URL as an environment variable in your frontend application's directory.
