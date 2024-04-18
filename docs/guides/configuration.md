---
sidebar_position: 3
---

# Configuration

Configuration options for Syncosaurus are set with the `syncosaurus.json` file in the root directory of your Syncosaurus project.

Running `syncosaurus init` to scaffold a new project or `syncosaurus setup` to add Syncosaurus to an existing project will automatically add a `syncosaurus.json` configuration file to the root directory of your project.

## `syncosaurus.json` configuration options

### `projectName`

This is the name of your Syncosaurus project. This value will be used when deploying your Syncosaurus project to Cloudflare. Though Syncosaurus will also conduct a check, make sure there are no conflicts of this value with any of your deployed workers.

### `msgFrequency`

This is the amount of time (in milliseconds) that subsequent message broadcast of app updates should be delayed.
The default value of `msgFrequency` is `16` (ms), which equates to approximately 62.5 broadcasted updates per second.

### `useStorage`

This value determines whether your application persists data to the Syncosaurus server using [Cloudflare's Transactional Storage API](https://developers.cloudflare.com/durable-objects/api/transactional-storage-api/)

The default value of `useStorage` is `false`.

### `autosaveInterval`

This is the amount of time (in milliseconds) that subsequent saves of your application's authoritative state's to persistence should be delayed. If the value of `useStorage` is `false`, this value will be ignored.

The default value of `autosaveInterval` is `30000` (ms), so a "save" will occur once every 30 seconds.
