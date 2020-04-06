import Wings from '@wingscms/sdk/src';
import { buildClientSchema } from 'graphql';
import { mockServer } from 'graphql-tools';
import { image } from '../../utils';
import introspectionResult from './introspectionResult.json';

const schema = buildClientSchema(introspectionResult);

const server = mockServer(
  schema,
  {
    Money: () => ({
      amount: 1000,
    }),
    Currency: () => ({
      id: 'EUR',
      name: 'Euro',
      symbol: '€',
    }),
    PaymentMethodIcon: () => ({
      url: 'https://assets.wings.dev/img/icons/homepay.png',
    }),
    Query: () => ({
      petition: () => ({
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"sdafdsfas"]]]]}',
        submissionSchema:
          '{"type":"object","required":["firstName","lastName","email","terms","privacyConsent"],"properties":{"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"email":{"title":"Email address","type":"string","format":"email"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        signatureCount: 50,
      }),
      fundraiser: () => ({
        id: 'asdasd',
        title: 'This is a test campaign',
        image: {
          url: image(800, 600),
          caption: 'A test image',
        },
        intro: 'asdasdaasd',
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"sdafdsfas"]]]]}',
        resourceType: 'node.fundraiser',
        submissionSchema:
          '{"type":"object","required":["email","firstName","lastName","terms","privacyConsent"],"properties":{"email":{"title":"Email address","type":"string","format":"email"},"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        target: {
          amount: 50400,
          currency: {
            id: 'EUR',
            name: 'Euro',
            symbol: '€',
          },
        },
        raised: {
          amount: 17300,
          currency: {
            id: 'EUR',
            name: 'Euro',
            symbol: '€',
          },
        },
        amounts: {
          disableCustomAmount: false,
          options: [
            {
              amount: {
                amount: 500,
              },
            },
            {
              amount: {
                amount: 1000,
              },
            },
            {
              amount: {
                amount: 2500,
              },
            },
          ],
        },
        paymentMethods: [
          {
            id: 'mollie_inghomepay',
            title: "ING Home'Pay",
          },
        ],
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
