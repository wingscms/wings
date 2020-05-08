import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import { Button, Icon } from '@wingscms/components';

const DEFAULT_ICON = '';

const props = ({
  size = Button.Size.MEDIUM,
  loading = false,
  intent = Button.Intent.NONE,
  icon = DEFAULT_ICON,
} = {}) => ({
  type: select('type', { normal: 'normal', outline: 'outline' }, 'normal'),
  intent: select('intent', Button.Intent, intent),
  size: select('size', Button.Size, size),
  disabled: boolean('disabled', false),
  loading: boolean('loading', loading),
  children: text('children', 'Click me!'),
  icon: select('icon', [DEFAULT_ICON, ...Icon.ICON_NAMES], icon),
});

export default () => <Button {...props()} />;
export const Primary = () => <Button {...props({ intent: Button.Intent.PRIMARY })} />;
export const Small = () => <Button {...props({ size: Button.Size.SMALL })} />;
export const WithIcon = () => (
  <Button {...props({ icon: 'twitter', intent: Button.Intent.PRIMARY })} />
);
export const Loading = () => <Button {...props({ loading: true })} />;
export const LoadingSmall = () => <Button {...props({ size: Button.Size.SMALL, loading: true })} />;
