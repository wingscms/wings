import React from 'react';
import { text, select, boolean, color } from '@storybook/addon-knobs/react';
import { Button, Icon } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const DEFAULT_ICON = '';

const props = ({
  size = Button.Size.MEDIUM,
  loading = false,
  intent = Button.Intent.NONE,
  icon = DEFAULT_ICON,
  buttonType = Button.Type.NORMAL,
} = {}) => ({
  buttonType: select('buttonType', Button.Type, buttonType),
  intent: select('intent', Button.Intent, intent),
  size: select('size', Button.Size, size),
  disabled: boolean('disabled', false),
  loading: boolean('loading', loading),
  children: text('children', 'Click me!'),
  icon: select('icon', [DEFAULT_ICON, ...Icon.ICON_NAMES], icon),
  backgroundColor: color('backgroundColor'),
  backgroundHoverColor: color('backgroundHoverColor'),
  borderColor: color('borderColor'),
  borderHoverColor: color('borderHoverColor'),
  textColor: color('textColor'),
  textHoverColor: color('textHoverColor'),
});

export default () => <Button {...props()} />;
export const Primary = () => <Button {...props({ intent: Button.Intent.PRIMARY })} />;
export const Opacity = () => <Button {...props({ buttonType: Button.Type.OPACITY })} />;
export const Outline = () => <Button {...props({ buttonType: Button.Type.OUTLINE })} />;
export const Small = () => <Button {...props({ size: Button.Size.SMALL })} />;
export const WithIcon = () => (
  <Button {...props({ icon: 'twitter', intent: Button.Intent.PRIMARY })} />
);
export const Loading = () => <Button {...props({ loading: true })} />;
export const LoadingSmall = () => <Button {...props({ size: Button.Size.SMALL, loading: true })} />;

export const wrapStory = paddingWrap;
