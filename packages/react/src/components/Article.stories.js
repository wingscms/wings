import React from 'react';
import Article from './Article';
import richMd from '../../fixtures/mobiledocRich.json';
import { image } from '../../../../utils';

const node = {
  title: 'This is a test article',
  image: {
    url: image(800, 600),
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

export default () => <Article node={node} />;
