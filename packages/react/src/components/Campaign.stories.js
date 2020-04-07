import React from 'react';
import { Campaign } from '@wingscms/react';
import richMd from '../../fixtures/mobiledocRich.json';
import { image } from '../../../../utils';

const node = {
  title: 'This is a test campaign',
  image: {
    url: image(800, 600),
    caption: 'A test image',
  },
};

export default () => (
  <Campaign
    id="asdasd"
    resourceType="node.fundraiser"
    copy={{ fundraiserCounterMessage: 'has been donated', fundraiserTargetText: '500' }}
  />
);
