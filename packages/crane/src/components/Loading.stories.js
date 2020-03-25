import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loading, useTheme } from '..';

export default () => {
  const theme = useTheme();
  return (
    <Loading
      intent={select('intent', theme.Intent, 'primary')}
      size={select('size', Loading.Size, 'medium')}
    />
  );
};
