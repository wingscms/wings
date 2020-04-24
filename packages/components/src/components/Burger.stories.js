import React from 'react';
import { number, color, boolean } from '@storybook/addon-knobs/react';
import { Burger } from '@wingscms/components';

export default () => (
  <Burger
    active={boolean('active', false)}
    height={number('height', 30)}
    width={number('width', 40)}
    barHeight={number('barHeight', 5)}
    barBorderRadius={number('barBorderRadius', 0)}
    color={color('color')}
    hoverColor={color('hoverColor')}
  />
);
