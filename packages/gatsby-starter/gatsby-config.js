const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Wings ♥️ Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify',
    {
      resolve: '@wingsplatform/gatsby-plugin',
      options: {
        appSecret: process.env.WINGS_APP_SECRET,
        components: {
          article: path.resolve('./src/components/templates/ArticleDefault.js'),
        },
      },
    },
  ],
};
