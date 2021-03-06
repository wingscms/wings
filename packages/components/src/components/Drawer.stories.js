import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Drawer } from '@wingscms/components';

export default () => (
  <Drawer
    open={boolean('open', true)}
    position={select('position', Drawer.Position, Drawer.Position.RIGHT)}
    size={text('size', '400px')}
  />
);
