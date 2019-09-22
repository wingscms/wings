export default {
  name: 'Petition Options',
  key: 'petitionoptions',
  locations: ['node.petition'],
  definition: {
    type: 'object',
    title: '',
    properties: {
      disableCounter: {
        type: 'boolean',
        title: 'Disable petition counter',
        default: false,
      },
    },
  },
};
