import React from 'react';
import { Heading, List, Text } from '@wingscms/components';

const headings = [1, 2, 3, 4, 5, 6].map(rank => ({
  name: `h${rank}`,
  component: props => <Heading rank={rank} {...props} />,
}));

const _List = type => props => (
  <List type={type} {...props}>
    {React.Children.map(props.children, child => (
      <List.Item {...child.props}></List.Item>
    ))}
  </List>
);

export default [
  { name: 'p', component: Text },
  { name: 'ul', component: _List(List.Type.UNORDERED) },
  { name: 'ol', component: _List(List.Type.ORDERED) },
  ...headings,
];
