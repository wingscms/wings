import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { Loading, Theme } from '..';

export default () => (
  <Loading
    intent={select('intent', Theme.Intent, 'primary')}
    size={select('size', Loading.Size, 'medium')}
  />
);
