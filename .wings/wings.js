import Wings from '@wingscms/sdk/src';
import { buildClientSchema } from 'graphql';
import { mockServer } from 'graphql-tools';
import { image } from '../utils';
import introspectionResult from './data/introspectionResult.json';

const isTest = process.env.NODE_ENV === 'test';

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
    ImageFile: () => ({
      url: image(),
    }),
    Locale: () => ({
      id: 'en',
      name: 'English',
      primary: true,
    }),
    Query: () => ({
      event: () => ({
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
        resourceType: 'node.event',
        submissionSchema:
          '{"type":"object","required":["firstName","lastName","email","terms","privacyConsent"],"properties":{"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"email":{"title":"Email address","type":"string","format":"email"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        attendeeCount: 50,
        schedule: {
          start: 1578567951390,
          end: 1578568051390,
        },
        location: {
          name: 'A place',
          street: null,
          city: null,
          zip: null,
          country: null,
        },
        fee: {
          amount: {
            amount: 500,
          },
        },
      }),
      petition: () => ({
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
        resourceType: 'node.petition',
        submissionSchema:
          '{"type":"object","required":["firstName","lastName","email","terms","privacyConsent"],"properties":{"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"email":{"title":"Email address","type":"string","format":"email"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        signatureCount: 50,
        signatureGoal: 500,
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
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
        resourceType: 'node.fundraiser',
        submissionSchema:
          '{"type":"object","required":["email","firstName","lastName","terms","privacyConsent"],"properties":{"email":{"title":"Email address","type":"string","format":"email"},"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        target: {
          amount: 50000,
        },
        raised: {
          amount: 17300,
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
  if (!isTest) console.log('client.query', ...args, 'result', res);
  return res.data;
};

export default client;
