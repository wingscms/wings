import Wings from '@wingscms/sdk';

export default new Wings({
  project: process.env.GATSBY_WINGS_PROJECT,
  appKey: process.env.GATSBY_WINGS_APP_KEY,
  endpoint: process.env.GATSBY_WINGS_ENDPOINT,
});
