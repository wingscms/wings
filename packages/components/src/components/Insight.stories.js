import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Insight } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

export default () => (
  <Insight fade={boolean('fade', true)}>
    {text('text', 'This is some example text inside of an insight.')}
  </Insight>
);

export const wrapStory = paddingWrap;
