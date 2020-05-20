import React from 'react';
import { Heading, Text } from '@wingscms/components';

const headings = [1, 2, 3, 4, 5, 6].map(rank => ({
  name: `h${rank}`,
  component: props => <Heading rank={rank} {...props} />,
}));

export default [{ name: 'p', component: Text }, ...headings];
