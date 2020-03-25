import React from 'react';
import { select, number } from '@storybook/addon-knobs/react';
import { Counter, useTheme } from '..';

export default () => {
  const theme = useTheme();
  return (
    <Counter
      intent={select('intent', theme.Intent, 'primary')}
      max={number('max', 100)}
      current={number('current', 76)}
      height={number('height', 12)}
    />
  );
};
