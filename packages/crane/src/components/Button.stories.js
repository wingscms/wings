import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Button } from '..';

const props = ({ size, loading } = {}) => ({
  type: select('type', { normal: 'normal', outline: 'outline' }, 'normal'),
  intent: select('intent', Button.Intent, 'none'),
  size: select('size', Button.Size, size || 'medium'),
  disabled: boolean('disabled', false),
  loading: boolean('loading', loading || false),
  children: text('children', 'Click me!'),
});

export default () => <Button {...props()} />;
export const Loading = () => <Button {...props({ loading: true })} />;
export const LoadingSmall = () => <Button {...props({ size: Button.Size.SMALL, loading: true })} />;
export const Small = () => <Button {...props({ size: Button.Size.SMALL })} />;
