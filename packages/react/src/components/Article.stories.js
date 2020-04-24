import React from 'react';
import { Article } from '@wingscms/react';
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

const Default = () => <Article node={node} />;

export default Default;
export const NoImage = () => <Article node={{ ...node, image: null }} />;

Default.snapshotDelay = 1;
NoImage.snapshotDelay = 1;
