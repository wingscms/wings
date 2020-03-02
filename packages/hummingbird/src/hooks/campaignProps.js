import { useState } from 'react';
import { defineMessages } from 'react-intl';
import routing from '../../services/routing';

const formMessages = defineMessages({
  signupSubmitText: {
    id: 'hummingbird.CampaignForm.signupSubmit.text',
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
  addressFieldLabel: {
    id: 'hummingbird.CampaignForm.addressField.label',
    description: 'Address field label',
    defaultMessage: 'Address',
  },
  zipcodeFieldLabel: {
    id: 'hummingbird.CampaignForm.zipcodeField.label',
    description: 'Zipcode field label',
    defaultMessage: 'Postcode',
  },
  cityFieldLabel: {
    id: 'hummingbird.CampaignForm.cityField.label',
    description: 'City field label',
    defaultMessage: 'City',
  },
  countryFieldLabel: {
    id: 'hummingbird.CampaignForm.countryField.label',
    description: 'Country field label',
    defaultMessage: 'Country',
  },
  phoneFieldLabel: {
    id: 'hummingbird.CampaignForm.phoneField.label',
    description: 'Phone field label',
    defaultMessage: 'Phone number',
  },
  amountFieldLabel: {
    id: 'hummingbird.CampaignForm.amountField.label',
    description: 'Amount field label',
    defaultMessage: 'Amount',
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
  campaignErrorButtonText: {
    id: 'hummingbird.Campaign.error.buttonText',
    description: 'Campaign error step buttton text',
    defaultMessage: 'Try again',
  },
});

const dynamicFormMessages = node => {
  if (!node) return [];
  return [
    {
      key: 'termsFieldLabel',
      message: {
        id: 'hummingbird.CampaignForm.termsField.label',
        description: 'Terms field label',
      },
      values: {
        url: (node.settings ? node.settings.legal.terms.url : '') || '/terms',
      },
    },
    {
      key: 'privacyConsentFieldLabel',
      message: {
        id: 'hummingbird.CampaignForm.privacyConsentField.label',
        description: 'Privacy consent field label',
      },
      values: {
        url: (node.settings ? node.settings.legal.privacyPolicy.url : '') || '/privacy',
      },
    },
  ];
};

const campaignMessages = defineMessages({
  descriptionCollapse: {
    id: 'hummingbird.Campaign.description.collapse',
    description: 'Collapse proposition button text',
    defaultMessage: 'Collapse',
  },
  descriptionExpand: {
    id: 'hummingbird.Campaign.description.expand',
    description: 'Expand proposition button text',
    defaultMessage: 'Read more',
  },
  eventInfoTitle: {
    id: 'hummingbird.Campaign.eventInfo.title',
    description: 'Title for Event metadata',
    defaultMessage: 'Info',
  },
  eventStartLabel: {
    id: 'hummingbird.Campaign.eventStart.label',
    description: 'Label for Event Start date',
    defaultMessage: 'Start',
  },
  eventEndLabel: {
    id: 'hummingbird.Campaign.eventEnd.label',
    description: 'Label for Event End date',
    defaultMessage: 'End',
  },
  eventLocationLabel: {
    id: 'hummingbird.Campaign.eventLocation.label',
    description: 'Label for Event Location',
    defaultMessage: 'Location',
  },
  eventFeeLabel: {
    id: 'hummingbird.Campaign.eventFee.label',
    description: 'Label for Event Fee',
    defaultMessage: 'Price',
  },
  fundraiserCounterMessage: {
    id: 'hummingbird.Campaign.fundraiserCounter.message',
    description: 'Description for fundraiser counter component',
    defaultMessage: 'has been donated to this fundraiser',
  },
});

const dynamicCampaignMessages = node => {
  if (!node) return [];
  return [
    {
      key: 'petitionCounterMessage',
      message: {
        id: 'hummingbird.Campaign.petitionCounter.message',
        description: 'Description for petition counter component',
        defaultMessage: `{signatureCount, plural,
                  one {person has}
                  other {people have}
              } signed this petition`,
      },
      values: { signatureCount: node.signatureCount },
    },
  ];
};

const formatMessages = ({ staticMessages = [], dynamicMessages = [], intl }) => {
  const _staticMessages = Object.keys(staticMessages).map(m => ({
    key: m,
    message: staticMessages[m],
    values: {},
  }));
  const messages = _staticMessages.concat(dynamicMessages);
  return messages.reduce(
    (c, message) => ({
      ...c,
      [message.key]: intl.formatMessage(message.message, message.values),
    }),
    {},
  );
};

export default intl => {
  const [node, setNode] = useState(null);
  const schedule = node && node.schedule;
  const scheduleStart = schedule && schedule.start ? new Date(schedule.start) : null;
  const scheduleEnding = schedule && schedule.end ? new Date(schedule.end) : null;
  const { fee, signatureGoal, target } = node || {};
  return {
    redirectUrlForNode: n => routing.getCampaignConfirmedUrl(n),
    copy: {
      ...formatMessages({
        staticMessages: campaignMessages,
        dynamicMessages: dynamicCampaignMessages(node),
        intl,
      }),
      eventStartTime: scheduleStart
        ? `${intl.formatDate(scheduleStart)} ${intl.formatTime(scheduleStart)}`
        : null,
      eventEndTime: scheduleEnding
        ? `${intl.formatDate(scheduleEnding)} ${intl.formatTime(scheduleEnding)}`
        : null,
      eventFee: fee
        ? intl.formatNumber(fee.amount.amount / 100, {
            style: 'currency',
            currency: fee.amount.currency.id,
            currencyDisplay: 'symbol',
          })
        : null,
      petitionCounterGoalText: signatureGoal ? intl.formatNumber(signatureGoal) : null,
      fundraiserTargetText: target
        ? `${target.currency.symbol}${intl.formatNumber(target.amount / 100)}`
        : null,
    },
    formProps: {
      copy: formatMessages({
        staticMessages: formMessages,
        dynamicMessages: dynamicFormMessages(node),
        intl,
      }),
      onLoad: n => setNode(n),
    },
  };
};
