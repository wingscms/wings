import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Insight } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <Insight reveal={boolean('reveal', true)}>
    {text('children', 'This is some example text inside of an insight.')}
  </Insight>
);

export const wrapStory = paddingWrap;
