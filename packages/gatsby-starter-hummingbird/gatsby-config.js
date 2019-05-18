require('dotenv').config();

const { getDesign, getTypographyConfig, getFooterConfig } = require('./node/utils');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || process.env.URL || 'https://wings.dev',
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
        gaTrackingId: process.env.GA_TRACKING_ID,
        basicAuth: process.env.BASIC_AUTH,
        design: {
          ...getDesign(),
        },
        typography: {
          ...getTypographyConfig(),
        },
        footer: {
          title: 'Wings',
          logoUrl: 'https://files.wings.dev/1532458206273/wings4-2.png?w=300&quality=100',
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
                  url: 'mailto:dev@wings.dev',
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
