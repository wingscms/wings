import { defineMessages } from 'react-intl';
import routing from '../../services/routing';

const messages = defineMessages({
  submitText: {
    id: 'hummingbird.CampaignForm.submit.text',
    description: 'Text for submit button',
    defaultMessage: 'Submit',
  },
  eventSubmitText: {
    id: 'hummingbird.CampaignForm.eventSubmit.text',
    description: 'Text for event submit button',
    defaultMessage: 'Attend',
  },
  fundraiserSubmitText: {
    id: 'hummingbird.CampaignForm.fundraiserSubmit.text',
    description: 'Text for fundraiser submit button',
    defaultMessage: 'Donate',
  },
  petitionSubmitText: {
    id: 'hummingbird.CampaignForm.petitionSubmit.text',
    description: 'Text for petition submit button',
    defaultMessage: 'Sign',
  },
  emailFieldLabel: {
    id: 'hummingbird.CampaignForm.emailField.label',
    description: 'Email field label',
    defaultMessage: 'Email address',
  },
  firstNameFieldLabel: {
    id: 'hummingbird.CampaignForm.firstNameField.label',
    description: 'First name field label',
    defaultMessage: 'First name',
  },
  lastNameFieldLabel: {
    id: 'hummingbird.CampaignForm.lastNameField.label',
    description: 'Last name field label',
    defaultMessage: 'Last name',
  },
  newsletterFieldLabel: {
    id: 'hummingbird.CampaignForm.newsletterField.label',
    description: 'Newslettter field label',
    defaultMessage: 'Stay up to date',
  },
  termsFieldLabel: {
    id: 'hummingbird.CampaignForm.termsField.label',
    description: 'Terms field label',
    defaultMessage: 'Agree to our terms & conditions',
  },
  privacyConsentFieldLabel: {
    id: 'hummingbird.CampaignForm.privacyConsentField.label',
    description: 'Privacy consent field label',
    defaultMessage: 'Agree to our privacy policy',
  },
  campaignConfirmText: {
    id: 'hummingbird.Campaign.confirm.text',
    description: 'Campaign confirm step text',
    defaultMessage:
      'We have sent you an email with a confirmation link to make sure all signatures are genuine. If you follow that link, your signature will count. Thanks!',
  },
  campaignConfirmTitle: {
    id: 'hummingbird.Campaign.confirm.title',
    description: 'Campaign confirm step title',
    defaultMessage: 'We’re almost there!',
  },
  campaignLoadingText: {
    id: 'hummingbird.Campaign.loading.text',
    description: 'Campaign loading text',
    defaultMessage: 'loading',
  },
  campaignErrorTitle: {
    id: 'hummingbird.Campaign.error.title',
    description: 'Campaign error step title',
    defaultMessage: 'Oops!',
  },
  campaignErrorText: {
    id: 'hummingbird.Campaign.error.text',
    description: 'Campaign error step text',
    defaultMessage:
      'Something went wrong with submitting the form. Try again or report the issue to us.',
  },
});

export default intl => ({
  redirectUrlForNode: node => routing.getCampaignConfirmedUrl(node),
  formProps: {
    copy: Object.keys(messages).reduce(
      (c, m) => ({ ...c, [m]: intl.formatMessage(messages[m]) }),
      {},
    ),
  },
});
