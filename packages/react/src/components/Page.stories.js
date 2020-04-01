import React from 'react';
import Page from './Page';

const node = {
  title: 'This is a test page',
  image: {
    url: 'https://files.wings.dev/1530796123797/space-travel-1784461640.png',
    caption: 'A test image',
  },
  content:
    '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Some Page"]]]]}',
};

export default () => <Page node={node} />;
