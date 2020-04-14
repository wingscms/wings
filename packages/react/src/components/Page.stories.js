import React from 'react';
import { Page } from '@wingscms/react';
import richMd from '../../fixtures/mobiledocRich.json';
import { image } from '../../../../utils';

const node = {
  title: 'This is a test page',
  image: {
    url: image(800, 600),
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

export default () => <Page node={node} />;
