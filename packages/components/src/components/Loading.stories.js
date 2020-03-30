import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loading, Theme } from '..';

export default () => (
  <Loading
    intent={select('intent', Theme.Intent, Theme.Intent.PRIMARY)}
    size={select('size', Loading.Size, Loading.Size.MEDIUM)}
  />
);
