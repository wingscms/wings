# gatsby-plugin-wings

## Install

`npm install gatsby-plugin-wings`

## Usage

In your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-wings',
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
