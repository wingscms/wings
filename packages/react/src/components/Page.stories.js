import React from 'react';
import Page from './Page';
import richMd from '../../fixtures/mobiledocRich.json';

const node = {
  title: 'This is a test page',
  image: {
    url: 'https://files.wings.dev/1530796123797/space-travel-1784461640.png',
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

export default () => <Page node={node} />;
