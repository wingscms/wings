import React from 'react';

export default ({ renderWith: View, name }) => ({
  name,
  component: View,
  type: 'react',
  render: ({ payload, ...props }) => <View {...payload} {...props} />,
});
