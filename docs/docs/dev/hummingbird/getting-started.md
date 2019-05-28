---
title: Getting Started
---

## Create your project

```sh
$ mkdir my-project
$ cd my-project
```

## Initialize npm & install modules

Add a `package.json` file:

```json
{
  "private": true,
  "scripts": {
    "start": "gatsby develop",
    "build": "gatsby build"
  },
  "dependencies": {
    "@wingscms/hummingbird": "^0.16.2",
    "dotenv": "^8.0.0",
    "gatsby": "^2.7.3",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```

And install the modules:

```sh
$ npm install
```

## Gatsby/Hummingbird configuration

In the root of your project, add a `gatsby-config.js` file:

```js
// gatsby-config.js

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `My Project`,
    siteUrl: process.env.SITE_URL || process.env.URL || 'http://localhost:8000',
  },
  __experimentalThemes: [
    {
      resolve: "@wingscms/hummingbird",
      options: {
        wings: {
          project: process.env.GATSBY_WINGS_PROJECT,
          appKey: process.env.GATSBY_WINGS_APP_KEY,
        },
        design: {},
        footer: {},
      },
    },
  ],
}
```

## Add environment variables

Because we're using the `dotenv` package, we can add a `.env` file in the root. The config we defined before references `GATSBY_WINGS_PROJECT`/`GATSBY_WINGS_APP_KEY`, so we need to define these in our `.env` file for local development:

```env
# .env

GATSBY_WINGS_PROJECT=<your project ID>
GATSBY_WINGS_APP_KEY=<your app key>
```

> NOTE: to create an app key, you can create an app at
> `Settings`->`Apps`->`Add App` in the [Wings dashboard](https://admin.wings.dev). Here you can assign a default main menu and home page for your app, and reveal your project ID and app key by clicking `Show Connection Info`.

## Fire up your development server

Now you just need to run the `start` script to get going!

```sh
$ npm start
```
