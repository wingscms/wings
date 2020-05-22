import React from 'react';
import { color, number } from '@storybook/addon-knobs/react';
import { SocialButtons } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = () => ({
  iconColor: color('iconColor'),
  iconHoverColor: color('iconHoverColor'),
  itemBackgroundColor: color('itemBackgroundColor'),
  itemBackgroundHoverColor: color('itemBackgroundHoverColor'),
  itemBorderRadius: number('itemBorderRadius', 4),
  itemPadding: number('itemPadding', 8),
  size: number('size', 40),
  spacing: number('spacing', 10),
});

export default () => (
  <SocialButtons {...props()}>
    <SocialButtons.Button icon="facebook" url="example.com" />
    <SocialButtons.Button icon="twitter" url="example.com" />
    <SocialButtons.Button icon="linkedin" url="example.com" />
    <SocialButtons.Button icon="reddit" url="example.com" />
    <SocialButtons.Button icon="email" url="mailto:example@example.com" />
  </SocialButtons>
);

export const wrapStory = paddingWrap;
