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
        appSecret: process.env.WINGS_APP_SECRET,
        components: {
          article: path.resolve('./src/components/Article.js'),
        },
      },
    },
  ];
};
```
