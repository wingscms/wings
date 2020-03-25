import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Button, useTheme } from '..';

export default () => {
  const theme = useTheme();
  return (
    <Button
      type={select('type', { normal: 'normal', outline: 'outline' }, 'normal')}
      intent={select('intent', theme.Intent, 'primary')}
      size={select('size', Button.Size, 'medium')}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
    >
      {text('Button Text', 'Oh my, a button!')}
    </Button>
  );
};
