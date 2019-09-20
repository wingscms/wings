export default {
  name: 'Event Copy',
  key: 'eventcopy',
  locations: ['node.event'],
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
    },
  },
};
