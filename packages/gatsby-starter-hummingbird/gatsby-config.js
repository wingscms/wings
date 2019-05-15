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
          title: 'Hummingbird',
          logoUrl:
            'https://files.wings.dev/cgk9KpT3eETFQvfqz/1557917914578/hummingbird-black-footer.png',
          logoLink: 'https://wings.dev',
          columns: [
            {
              title: 'Contact',
              rows: [
                {
                  type: 'text',
                  content: 'Example Street 42<br/>Example City<br/1234AB<br/Europe',
                },
                {
                  type: 'link',
                  url: 'mailto:dev@wings.dev',
                  content: 'dev@wings.dev',
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
                      platform: 'facebook',
                      url: 'https://facebook.com/bureaubolster',
                    },
                    {
                      platform: 'twitter',
                      url: 'https://twitter.com/bureaubolster',
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
