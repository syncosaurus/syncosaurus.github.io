---
sidebar_position: 2
---

# Add to an Existing Project

To add Syncosaurus to an existing React-based project, first navigate to the root directory of your application.
Then, run the following command in your terminal:

```shell
npx syncosaurus setup
```

That's it! Make sure to correctly configure your Syncosaurus application before deployment - see here for details.

## Spin up a local development environment

A local development environment makes it significantly easier to rapidly iterate, test, and debug your application in a consistent, controlled setting. Syncosaurus comes built-in with a local Syncosaurus server.

If you have added Syncosaurus to an existing project and are not using Vite as your frontend build tool, run the same command with the `-backendOnly` or `-b` flag enabled:

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

```js title="/src/components/App.jsx"
import mutators from '../mutators.js';

const synco = new Syncosaurus({
	// highlight-next-line
	server: "http://localhost:8787",
	userID: "my-user-id",
	auth: "4fJbGOWma=QEebX6H1X6AAe3/yok1R-fwKMqot5XOvxPU0YwI!sm8nQ!"
	mutators,
});
```

## Deploy your Syncosaurus project

Before you deploy your Syncosaurus application, make sure the following requirements are met:

- You are logged in to Cloudflare.
	- You can check your login status with `syncosaurus whoami`
	- If you are not logged in, run `syncosaurus login` and log in via OAuth or API token.
- You are in the root directory of your project, which must have `syncosaurus.json` configuration file.
- Your mutators are correctly defined in your `mutators.js` file, and your `mutators.js` file is located in the `src` sub-directory.
- Your `auth` value is defined correctly in the Syncosaurus constructor
- Your authentication handler is correctly defined in your `authHandler.js` file, and your `authHandler.js` file is located in the `src` sub-directory.

Once the above requirements have been fulfilled, run the following command in your terminal:

```shell
npx syncosaurus deploy
```

If your application was configured correctly, the URL to your deployed application should be displayed in your terminal output, which should look similar to the output displayed below:

```shell
❯ npx syncosaurus deploy
 🦖 syncosaurus 0.7.1
--------------------------------------------------

Evolving your Syncosaurus server... done!

✅ Success! Your Syncosaurus server is available at https://dino-arcade.petrie.workers.dev
```

To deploy your frontend, simply add the provided Syncosaurus server URL as an environment variable to your frontend deployment.
