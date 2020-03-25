import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Button, useTheme } from '..';

const props = ({ theme, ...p }) => ({
  type: select('type', { normal: 'normal', outline: 'outline' }, 'normal'),
  intent: select('intent', theme.Intent, 'primary'),
  size: select('size', Button.Size, p.size || 'medium'),
  disabled: boolean('disabled', false),
  loading: boolean('loading', p.loading || false),
  children: text('children', 'Click me!'),
});

export default () => {
  const theme = useTheme();
  return <Button {...props({ theme })} />;
};

export const Loading = () => {
  const theme = useTheme();
  return <Button {...props({ theme, loading: true })} />;
};

export const Small = () => {
  const theme = useTheme();
  return <Button {...props({ theme, size: Button.Size.SMALL })} />;
};
