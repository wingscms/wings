export default {
  name: 'Fundraiser Copy',
  key: 'fundraisercopy',
  locations: ['node.fundraiser'],
  definition: {
    type: 'object',
    title: '',
    properties: {
      confirmedSuccessTitle: {
        type: 'string',
        title: 'Confirmed page payment success title:',
        default: '',
      },
      confirmedSuccessText: {
        type: 'string',
        title: 'Confirmed page payment success  text:',
        default: '',
      },
      confirmedPendingTitle: {
        type: 'string',
        title: 'Confirmed page payment pending title:',
        default: '',
      },
      confirmedPendingText: {
        type: 'string',
        title: 'Confirmed page payment pending text:',
        default: '',
      },
      confirmedFailedTitle: {
        type: 'string',
        title: 'Confirmed page payment failed title:',
        default: '',
      },
      confirmedFailedText: {
        type: 'string',
        title: 'Confirmed page payment failed text:',
        default: '',
      },
      confirmedShareTitle: {
        type: 'string',
        title: 'Confirmed page share title:',
        default: '',
      },
      fundraiserSubmitText: {
        type: 'string',
        title: 'Submit text:',
        default: '',
      },
    },
  },
};
