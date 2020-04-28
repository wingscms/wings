import React from 'react';
import { ShareButtons } from '@wingscms/components';

const items = [
  {
    platform: ShareButtons.Platform.FACEBOOK,
    url: '',
  },
  {
    platform: ShareButtons.Platform.TWITTER,
    url: '',
  },
  {
    platform: ShareButtons.Platform.WHATSAPP,
    url: '',
  },
  {
    platform: ShareButtons.Platform.EMAIL,
    url: '',
  },
];

export default () => <ShareButtons items={items} />;
