import React from 'react';
import { number, color, boolean } from '@storybook/addon-knobs/react';
import { Burger } from '..';

export default () => (
  <Burger
    active={boolean('active', false)}
    height={number('height', 30)}
    width={number('width', 40)}
    barHeight={number('barHeight', 5)}
    barColor={color('barColor')}
    barHoverColor={color('barHoverColor')}
    onClick={() => console.log('Button clicked!')}
  />
);
