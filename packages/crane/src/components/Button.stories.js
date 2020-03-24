import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Button, useTheme } from '..';

export default () => {
  const theme = useTheme();
  return (
    <Button
      type={select('Type', { normal: 'normal', outline: 'outline' }, 'normal')}
      intent={select('Intent', theme.Intent, 'none')}
      size={select('Size', Button.Size, 'normal')}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
    >
      {text('Button Text', 'Oh my, a button!')}
    </Button>
  );
};

export const foo = () => {
  const theme = useTheme();
  return (
    <Button
      type={select('Type', { normal: 'normal', outline: 'outline' }, 'normal')}
      intent={select('Intent', theme.Intent, 'none')}
      size={select('Size', Button.Size, 'normal')}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
    >
      {text('Button Text', 'Oh my, a button!')}
    </Button>
  );
};
