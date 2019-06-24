require('dotenv').config();

const { getDesign, getTypographyConfig, getFooterConfig } = require('./node/utils');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || process.env.URL || 'http://localhost:4000',
  },
  __experimentalThemes: [
    {
      resolve: '@wingscms/hummingbird',
      options: {
        wings: {
          project: process.env.GATSBY_WINGS_PROJECT,
          appKey: process.env.GATSBY_WINGS_APP_KEY,
          endpoint: process.env.GATSBY_WINGS_ENDPOINT,
        },
        blockRobots: process.env.BLOCK_ROBOTS || process.env.GATSBY_ENV !== 'production',
        basicAuth: process.env.BASIC_AUTH,
        design: {
          ...getDesign(),
        },
        typography: {
          ...getTypographyConfig(),
        },
        footer: {
          title: 'Wings',
          logoLink: 'https://wings.dev',
          columns: [
            {
              title: 'Contact',
              rows: [
                {
                  type: 'text',
                  content: ['Voorhaven 31', '3025HC Rotterdam', 'Netherlands'].join('<br/>'),
                },
                {
                  type: 'link',
                  url: 'mailto:info@wings.dev',
                  content: 'info@wings.dev',
                },
              ],
            },
            {
              title: 'Social',
              rows: [
                {
                  type: 'social',
                  profiles: [
                    {
                      platform: 'twitter',
                      url: 'https://twitter.com/wingscms',
                    },
                  ],
                },
              ],
            },
          ],
          ...getFooterConfig(),
        },
      },
    },
  ],
};
