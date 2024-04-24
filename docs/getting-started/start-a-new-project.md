---
sidebar_position: 1
---

# Start a New Project

To create a new Syncosaurus application, simply run the following command in your terminal:

```shell
npx syncosaurus init
```

That's it! Follow the prompts to set up your new Syncosaurus project.

## Spin up a local development environment

A local development environment makes it significantly easier to rapidly iterate, test, and debug your application in a consistent, controlled setting. Syncosaurus comes built-in with a local Syncosaurus server. If you are building a project from scratch using `syncosaurus init`, Syncosaurus includes a local Vite UI server as well.

To start both the Syncosaurus server and the Vite UI server, run the following command in your terminal:

```shell
npx syncosaurus dev
```

If your file structure adheres to Syncosaurus rules, and your configuration settings are correct, two localhost addresses will be displayed in your terminal output:
- a localhost address for your local Syncosaurus server
	- The port used will be the port you designated in the `syncosaurus.json` file. If one is not specified there, the local Syncosaurus server will default to port 3001.
- a localhost address for your local Vite UI server
	- The port used will be determined by Vite. Vite's default port is port 5173. If that port is being used, Vite will find and designate the next available port.

Your output should something like the following:

```shell
my-projects/dino-arcade via ⬢ v21.7.1
❯ npx syncosaurus dev
Checking for Syncosaurus installation...... found
Initializing local dev environment...... done!

--------------------------------------------------
🦖 Your local Syncosaurus dev server is ready at http://localhost:8787
🚀 Your local Vite UI server is ready at http://localhost:5173

Press 'x' to gracefully shut down both servers
```

Make sure to update your `server` value in your Syncosaurus constructor calls in your application code:

```js title="/src/components/App.jsx"
import mutators from '../mutators.js';

const synco = new Syncosaurus({
	// highlight-next-line
	server: "http://localhost:8787",
	userID: "my-user-id"
	auth: "4fJbGOWma=QEebX6H1X6AAe3/yok1R-fwKMqot5XOvxPU0YwI!sm8nQ!"
	mutators,
});
```

Now you're all set - freely iterate on your application, and see your code changes live!

## Deploy your Syncosaurus application

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

✅ Success! Your Syncosaurus server is available at https://dino-arcade.ducky.workers.dev
```

To deploy your frontend, simply add the provided Syncosaurus server URL as an environment variable to your frontend deployment.
