import React from 'react';
import { text, color } from '@storybook/addon-knobs/react';
import { Burger } from '..';

export default () => (
  <Burger
    height={text('height', '30px')}
    width={text('width', '40px')}
    barHeight={text('barHeight', '5px')}
    barColor={color('barColor')}
    barHoverColor={color('barHoverColor')}
    onClick={() => console.log('Button clicked!')}
  />
);
