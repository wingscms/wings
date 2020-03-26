import React from 'react';
import { select, number } from '@storybook/addon-knobs/react';
import { Counter, Theme } from '..';

export default () => (
  <Counter
    intent={select('intent', Theme.Intent, 'primary')}
    max={number('max', 100)}
    current={number('current', 76)}
    height={number('height', 12)}
  />
);
