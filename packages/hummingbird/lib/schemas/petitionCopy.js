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
        title: 'Petition counter number text:',
        default: '',
      },
      petitionCounterGoalText: {
        type: 'string',
        title: 'Petition counter goal text:',
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
    },
  },
};
