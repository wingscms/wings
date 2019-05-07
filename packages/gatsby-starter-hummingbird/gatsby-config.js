require('dotenv').config();

const { getDesign, getTypographyConfig, getFooterConfig } = require('./node/utils');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || process.env.URL || 'https://bureaubolster.com',
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
            'https://s3-eu-central-1.amazonaws.com/jaaps-screenshots/hummingbird-black-footer.png',
          logoLink: 'https://wings.dev',
          columns: [
            {
              title: 'Contact',
              rows: [
                {
                  type: 'text',
                  content: 'Example Street 42<br/>Example City<br/1234AB<br/Somewhere',
                },
              ],
            },
            {
              title: 'Social',
              rows: [
                {
                  type: 'social',
                  profiles: {
                    facebook: 'https://facebook.com', // '#fff', '#000'
                    twitter: 'https://twitter.com', // '#fff', '#000'],
                    instagram: 'https://instragram.com', // '#fff', '#000'],
                  },
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
