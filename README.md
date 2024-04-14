# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Team Notes

### On animated SVGs

Adding an animated SVG into Docusaurus requires a couple special steps. Follow the instructions [here](https://www.svgator.com/help/getting-started/add-animated-svgs-to-react-website), for item 1 for `create-react-app`. However, on step 3, make sure to leave the `<script>` tags in the SVG, and there must be a space or newline between the inner `CDATA[[ ]]`. See any animated SVG for an example.
