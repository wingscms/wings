import React from 'react';
import { Page } from '@wingscms/react';
import richMd from '../../fixtures/mobiledocRich.json';
import { image, backgroundWrap } from '../../../../utils';

const node = {
  title: 'This is a test page',
  image: {
    url: image(1600, 1200),
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

const Default = () => <Page node={node} />;

export default Default;

Default.snapshotDelay = 1;

export const wrapStory = backgroundWrap;
