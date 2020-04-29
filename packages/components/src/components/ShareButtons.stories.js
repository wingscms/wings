import React from 'react';
import { color, number } from '@storybook/addon-knobs/react';
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

export default () => (
  <ShareButtons
    items={items}
    iconColor={color('iconColor')}
    iconHoverColor={color('iconHoverColor')}
    itemBackgroundColor={color('itemBackgroundColor')}
    itemBackgroundHoverColor={color('itemBackgroundHoverColor')}
    itemBorderRadius={number('itemBorderRadius', 4)}
    itemPadding={number('itemPadding', 8)}
    size={number('size', 40)}
    spaceBetweenItems={number('spaceBetweenItems', 10)}
  />
);
