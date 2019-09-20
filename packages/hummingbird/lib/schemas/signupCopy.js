export default {
  name: 'Signup Copy',
  key: 'signupcopy',
  locations: ['node.signup'],
  definition: {
    type: 'object',
    title: '',
    properties: {
      confirmedTitle: {
        type: 'string',
        title: 'Confirmed page title:',
        default: '',
      },
      confirmedText: {
        type: 'string',
        title: 'Confirmed page text:',
        default: '',
      },
      confirmedShareTitle: {
        type: 'string',
        title: 'Confirmed page share title:',
        default: '',
      },
      signupSubmitText: {
        type: 'string',
        title: 'Submit text:',
        default: '',
      },
    },
  },
};
