import Wings from '@wingscms/sdk';
import dotenv from 'dotenv';

dotenv.config(`${process.cwd()}/.env`);

export default new Wings({
  project: process.env.GATSBY_WINGS_PROJECT,
  appKey: process.env.WINGS_ACCESS_TOKEN,
  endpoint: process.env.GATSBY_WINGS_ENDPOINT,
});
