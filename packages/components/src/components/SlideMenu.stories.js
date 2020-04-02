import React from 'react';
import { boolean, color, select } from '@storybook/addon-knobs/react';
import { SlideMenu } from '..';

export default () => (
  <SlideMenu
    active={boolean('active', true)}
    position={select('position', SlideMenu.Position, SlideMenu.Position.RIGHT)}
    backgroundColor={color('backgroundColor')}
  />
);
