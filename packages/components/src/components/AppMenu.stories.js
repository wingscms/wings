import React from 'react';

import { AppMenu } from '@wingscms/components';

import { image } from '../../../../utils';

const props = () => ({
  items: [
    { text: 'An Example Item', url: 'https://wings.dev' },
    { text: 'An Example Item', url: 'https://wings.dev' },
    { text: 'An Example Item', url: 'https://wings.dev' },
  ],
  logoImageUrl: image(320, 100),
  socialButtons: [
    {
      platform: 'facebook',
      url: 'https://wings.dev',
    },
    {
      platform: 'twitter',
      url: 'https://wings.dev',
    },
    {
      platform: 'whatsapp',
      url: 'https://wings.dev',
    },
    {
      platform: 'email',
      url: 'https://wings.dev',
    },
  ],
});

export default () => <AppMenu {...props()} />;
