require('dotenv').config();

const { getDesign, getTypographyConfig } = require('./node/utils');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || process.env.URL || 'https://bureaubolster.com',
  },
  __experimentalThemes: [
    {
      resolve: '@hummingbird/gatsby-theme',
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
          // primaryColor: '#ef5b58',
          // secondaryColor: '#000000',
          // colorWhite: '#ffffff',
          // colorBlack: '#212121',
          // textColor: '#212121',
          // linkColor: '#ef5b58',
          // linkColorHover: '#000000',
          // darkLinkColor: '#ef5b58',
          // darklinkColorHover: '#000000',
          // navigationColor: '#ffffff',
          // languagePickerColor: '#ffffff',
          // languagePickerColorHover: '#ef5b58',
          // footerLogoUrl:
          //   'https://s3-eu-central-1.amazonaws.com/jaaps-screenshots/hummingbird-black-footer.png',
          // faviconUrl:
          //   'https://s3-eu-central-1.amazonaws.com/jaaps-screenshots/hummingbird-favicon.png',
          // logoUrl:
          //   'https://s3-eu-central-1.amazonaws.com/jaaps-screenshots/hummingbird-black-footer.png',
        },
        typography: {
          ...getTypographyConfig(),
        },
        footerContent: [
          [
            ['title', 'Contact'],
            ['text', ['', 'Example Street 42', 'Example City', '4242DB', 'Somewhere']],
          ],
          [
            ['title', 'Social'],
            ['text', ['']],
            [
              'social',
              [
                ['facebook', 'https://facebook.com', '#fff', '#000'],
                ['twitter', 'https://twitter.com', '#fff', '#000'],
                ['instagram', 'https://instragram.com', '#fff', '#000'],
              ],
            ],
          ],
        ],
      },
    },
  ],
};
