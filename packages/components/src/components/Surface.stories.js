import React from 'react';
import { Surface } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import { color, number, text } from '@storybook/addon-knobs/react';

const props = () => ({
  backgroundColor: color('backgroundColor'),
  borderRadius: text('borderRadius', '0px'),
  elevation: number('elevation', 0, { range: true, min: 0, max: 5 }),
  height: text('height', '300px'),
  width: text('width', '300px'),
});

export default () => <Surface {...props()} />;

export const wrapStory = paddingWrap;
