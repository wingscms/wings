import React, { useState } from 'react';
import { boolean, color, select, text } from '@storybook/addon-knobs/react';
import { Burger, Drawer } from '..';

export default () => (
  <Drawer
    open={boolean('open', true)}
    position={select('position', Drawer.Position, Drawer.Position.RIGHT)}
    backgroundColor={color('backgroundColor')}
    size={text('size', '400px')}
  />
);

export const slideMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger
        style={{ position: 'absolute', right: '20px' }}
        active={open}
        onClick={() => setOpen(!open)}
      />
      <Drawer open={open} position={Drawer.Position.RIGHT}>
        <Burger
          style={{ position: 'absolute', right: '20px', top: '20px' }}
          active={open}
          onClick={() => setOpen(!open)}
        />
      </Drawer>
    </>
  );
};
