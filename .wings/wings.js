import Wings from '@wingscms/sdk';
import { buildClientSchema } from 'graphql';
import { mockServer } from 'graphql-tools';
import { image } from '../utils';
import introspectionResult from './data/introspectionResult.json';

const copy = [
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.404.message.text',
      description: '',
      message: "Uh oh. We couldn't find what you were looking for.",
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.petitionCounter.message',
      description: '',
      message:
        '{signatureCount, plural, one {person has} other {people have}} signed this petition',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.fundraiserCounter.message',
      description: '',
      message: 'has been donated to this fundraiser',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.description.collapse',
      description: '',
      message: 'Collapse',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.description.expand',
      description: '',
      message: 'Read more',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.confirm.text',
      description: '',
      message:
        'We have sent you an email with a confirmation link. Please click that link for confirmation.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.confirm.title',
      description: '',
      message: 'We’re almost there!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.error.text',
      description: '',
      message:
        'Something went wrong with submitting the form. Try again or report the issue to us.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.error.buttonText',
      description: '',
      message: 'Try again',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.error.title',
      description: '',
      message: 'Oops!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.signupTitle',
      description: '',
      message: 'Hurray!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.signupText',
      description: '',
      message: 'Thanks for you submission!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.signupShareTitle',
      description: '',
      message: 'Feel free to share:',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.petitionTitle',
      description: '',
      message: 'Hurray!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.petitionText',
      description: '',
      message: 'Thanks for you submission!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.petitionShareTitle',
      description: '',
      message: 'Feel free to share:',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.eventTitle',
      description: '',
      message: 'Hurray!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.eventText',
      description: '',
      message: 'Thanks for you submission!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.eventShareTitle',
      description: '',
      message: 'Feel free to share:',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserDefaultTitle',
      description: '',
      message: 'Thank you!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserDefaultText',
      description: '',
      message: 'Thank you for your interest in this fundraiser.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserSuccessTitle',
      description: '',
      message: 'Hurray!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserSuccessText',
      description: '',
      message: 'Thank you. The payment was successful.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserPendingTitle',
      description: '',
      message: 'Thanks for your contribution',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserPendingText',
      description: '',
      message:
        'Thanks for your contribution. Your payment is still processing. Please check with your bank to verify your payment.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserFailedTitle',
      description: '',
      message: 'Oh no!',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserFailedText',
      description: '',
      message:
        'Thanks for your interest. It seems like something went wrong with the payment. Please check with your bank and try again.',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignConfirmed.main.fundraiserShareTitle',
      description: '',
      message: 'Feel free to share:',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.signupSubmit.text',
      description: '',
      message: 'Submit',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.emailField.label',
      description: '',
      message: 'Email address',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.eventSubmit.text',
      description: '',
      message: 'Attend',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.firstNameField.label',
      description: '',
      message: 'First name',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.lastNameField.label',
      description: '',
      message: 'something',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.addressField.label',
      description: '',
      message: 'Address',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.zipcodeField.label',
      description: '',
      message: 'Postcode',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.cityField.label',
      description: '',
      message: 'City',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.countryField.label',
      description: '',
      message: 'Country',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.phoneField.label',
      description: '',
      message: 'Phone number',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.amountField.label',
      description: '',
      message: 'Amount',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.loading.text',
      description: '',
      message: 'loading',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.newsletterField.label',
      description: '',
      message: 'Stay up to date',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.petitionSubmit.text',
      description: '',
      message: 'Sign',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.fundraiserSubmit.text',
      description: '',
      message: 'Donate',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.privacyConsentField.label',
      description: '',
      message: 'I agree to the <a>privacy policy</a>',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.CampaignForm.termsField.label',
      description: '',
      message: 'I agree to the <a>terms & conditions</a>',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Article.chapters.title',
      description: '',
      message: 'Chapters',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.eventEnd.label',
      description: '',
      message: 'End',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.eventFee.label',
      description: '',
      message: 'Price',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.eventLocation.label',
      description: '',
      message: 'Location',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.eventStart.label',
      description: '',
      message: 'Start',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Campaign.eventInfo.title',
      description: '',
      message: 'Info',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Footer.madeBy.emoji',
      description: '',
      message: 'love',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Footer.madeBy.message',
      description: '',
      message: 'Made with {love} at Bolster',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Footer.poweredBy.message',
      description: '',
      message: 'Powered by Wings',
    },
  },
  {
    locale: {
      id: 'en',
      name: 'English',
      primary: true,
    },
    message: {
      messageId: 'wings.Article.skipToContent.tooltip',
      description: '',
      message: 'view the content',
    },
  },
];

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
    NodeStatus: () => 'PUBLISHED',
    Query: () => ({
      event: () => ({
        description:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        resourceType: 'node.event',
        copy,
        submissionSchema:
          '{"type":"object","required":["firstName","lastName","email","terms","privacyConsent"],"properties":{"firstName":{"title":"First name","type":"string"},"lastName":{"title":"Last name","type":"string"},"email":{"title":"Email address","type":"string","format":"email"},"newsletter":{"title":"Stay up to date","type":"boolean"},"terms":{"title":"Agree to our terms & conditions","type":"boolean","enum":[true]},"privacyConsent":{"title":"Agree to our privacy policy","type":"boolean","enum":[true]}}}',
        attendeeCount: 50,
        schedule: {
          start: 'April 20, 2020 20:00:00',
          end: 'April 20, 2020 22:00:00',
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
        image: {
          url: image(1600, 1200),
          caption: 'A test image',
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
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: {
          url: image(1600, 1200),
          caption: 'A test image',
        },
        copy,
      }),
      fundraiser: () => ({
        id: 'asdasd',
        title: 'This is a test campaign',
        image: {
          url: image(1600, 1200),
          caption: 'A test image',
        },
        copy,
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
