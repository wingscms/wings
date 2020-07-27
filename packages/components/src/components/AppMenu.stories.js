import React from 'react';

import { AppMenu } from '@wingscms/components';

const props = () => ({
  items: [
    { text: 'An Example Item', url: 'example.com' },
    { text: 'An Example Item', url: 'example.com' },
    { text: 'An Example Item', url: 'example.com' },
  ],
});

export default () => <AppMenu {...props()} />;
