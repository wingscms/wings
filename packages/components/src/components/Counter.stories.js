import React from 'react';
import { color, number, text } from '@storybook/addon-knobs/react';
import { Counter } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <Counter
    current={number('current', 76)}
    description={text('description', 'has been donated')}
    goal={number('goal', 100)}
    symbol={text('symbol', '€')}
    textColor={color('textColor')}
    barColor={color('barColor')}
  />
);

export const wrapStory = paddingWrap;
