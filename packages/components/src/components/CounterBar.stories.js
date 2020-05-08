import React from 'react';
import { color, number, select } from '@storybook/addon-knobs/react';
import { CounterBar, Theme } from '@wingscms/components';

export default () => (
  <CounterBar
    intent={select('intent', Theme.Intent, 'primary')}
    max={number('max', 100)}
    current={number('current', 76)}
    height={number('height', 12)}
    barColor={color('barColor')}
  />
);
