import React from 'react';
import { Heading } from '@wingscms/components';

export default [1, 2, 3, 4, 5, 6].map(rank => ({
  name: `h${rank}`,
  component: props => <Heading rank={rank} {...props} />,
}));
