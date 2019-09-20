export default {
  name: 'Petition Copy',
  key: 'petitioncopy',
  locations: ['node.petition'],
  definition: {
    type: 'object',
    title: '',
    properties: {
      counterMessage: {
        type: 'string',
        title: 'Counter number text:',
        default: '',
      },
      petitionCounterGoalText: {
        type: 'string',
        title: 'Counter goal text:',
        default: '',
      },
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
      emailFieldLabel: {
        type: 'string',
        title: 'Email field label',
        default: '',
      },
      petitionSubmitText: {
        type: 'string',
        title: 'Submit text:',
        default: '',
      },
    },
  },
};
