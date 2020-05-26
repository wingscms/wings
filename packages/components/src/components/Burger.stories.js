import React from 'react';
import { number, color as _color, boolean } from '@storybook/addon-knobs/react';
import { Burger } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = ({ eaten, color = null, barBorderRadius = 0 } = {}) => ({
  eaten: boolean('eaten', eaten),
  height: number('height', 30),
  width: number('width', 40),
  barHeight: number('barHeight', 5),
  barBorderRadius: number('barBorderRadius', barBorderRadius),
  color: _color('color', color),
  hoverColor: _color('hoverColor'),
});

export default () => <Burger {...props()} />;

export const ActiveRed = () => (
  <Burger {...props({ eaten: true, color: '#ff0000', barBorderRadius: 4 })} />
);

export const wrapStory = paddingWrap;
