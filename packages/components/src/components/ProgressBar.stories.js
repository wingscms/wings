import React from 'react';
import { color, number, select } from '@storybook/addon-knobs/react';
import { ProgressBar, Theme } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

export default () => (
  <ProgressBar
    intent={select('intent', Theme.Intent, 'primary')}
    max={number('max', 100)}
    current={number('current', 76)}
    height={number('height', 12)}
    barColor={color('barColor')}
  />
);

export const wrapStory = paddingWrap;
