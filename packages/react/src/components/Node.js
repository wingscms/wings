import React from 'react';

const types = {
  'node.entry.article': () => 'article',
  'node.entry.page': () => 'page',
  'node.fundraiser': () => 'fundraiser',
  'node.petition': () => 'petition',
  'node.signup': () => 'signup',
  'node.event': () => 'event',
};

export default ({ node, ...props }) => {
  const Comp = types[node.resourceType];
  return <Comp node={node} {...props} />;
};
