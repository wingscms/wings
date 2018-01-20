# gatsby-plugin-wings

## Install

`npm install @wingscms/gatsby-plugin`

## Usage

In your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: '@wingscms/gatsby-plugin',
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
