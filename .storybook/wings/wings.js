import Wings from '@wingscms/sdk/src';
import { buildClientSchema } from 'graphql';
import { mockServer } from 'graphql-tools';
import introspectionResult from './introspectionResult.json';

const schema = buildClientSchema(introspectionResult);

const server = mockServer(
  schema,
  {
    Query: () => ({
      petition: () => ({
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"sdafdsfas"]]]]}',
        submissionSchema:
          '{"type":"object","required":["firstName","lastName","email","terms","privacyConsent"],"properties":{"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"email":{"title":"Email address","type":"string","format":"email"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        signatureCount: 50,
      }),
    }),
  },
  false,
);

const client = new Wings({ domain: 'localhost' });

client.query = async (...args) => {
  const res = await server.query(...args);
  console.log('client.query', ...args, 'result', res);
  return res.data;
};

export default client;
