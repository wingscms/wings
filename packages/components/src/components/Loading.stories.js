import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loading, Theme } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

export default () => (
  <Loading
    intent={select('intent', Theme.Intent, Theme.Intent.PRIMARY)}
    size={select('size', Loading.Size, Loading.Size.MEDIUM)}
  />
);

export const wrapStory = paddingWrap;
