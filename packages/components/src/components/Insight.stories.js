import React from 'react';
import { boolean, text, number } from '@storybook/addon-knobs/react';
import { Insight } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <Insight
    reveal={boolean('reveal', true)}
    elevation={number('elevation', 1, { range: true, min: 0, max: 5 })}
  >
    {text('children', 'This is some example text inside of an insight.')}
  </Insight>
);

export const wrapStory = paddingWrap;
