import React from 'react';
import { number, color as _color, boolean } from '@storybook/addon-knobs/react';
import { Burger } from '@wingscms/components';

const props = ({ active = false, color = null, barBorderRadius = 0 } = {}) => ({
  active: boolean('active', active),
  height: number('height', 30),
  width: number('width', 40),
  barHeight: number('barHeight', 5),
  barBorderRadius: number('barBorderRadius', barBorderRadius),
  color: _color('color', color),
  hoverColor: _color('hoverColor'),
});

export default () => <Burger {...props()} />;

export const ActiveRed = () => (
  <Burger {...props({ active: true, color: '#ff0000', barBorderRadius: 4 })} />
);
