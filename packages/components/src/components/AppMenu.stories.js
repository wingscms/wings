import React from 'react';

import { AppMenu } from '@wingscms/components';

import { image } from '../../../../utils';

const props = () => ({
  items: [
    { text: 'An Example Item', url: 'example.com' },
    { text: 'An Example Item', url: 'example.com' },
    { text: 'An Example Item', url: 'example.com' },
  ],
  logoImageUrl: image(320, 100),
});

export default () => <AppMenu {...props()} />;
