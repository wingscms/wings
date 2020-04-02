import React from 'react';
import { text, color } from '@storybook/addon-knobs/react';
import { Burger } from '..';

export default () => (
  <Burger
    height={text('height', '40px')}
    width={text('width', '30px')}
    barHeight={text('barHeight', '5px')}
    backgroundColor={color('backgroundColor')}
    backgroundHoverColor={color('backgroundHoverColor')}
    onClick={() => console.log('Button clicked!')}
  />
);
