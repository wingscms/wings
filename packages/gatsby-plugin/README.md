# gatsby-plugin-wings

## Install

`npm install @wingsplatform/gatsby-plugin`

## Usage

In your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: '@wingsplatform/gatsby-plugin',
      options: {
        appKey: process.env.WINGS_APP_KEY,
        project: process.env.WINGS_PROJECT,
        templates: {
          article: path.resolve('./src/components/Article.js'),
          event: path.resolve('./src/components/Event.js'),
          entry: path.resolve('./src/components/Entry.js'),
        },
      },
    },
  ];
};
```
