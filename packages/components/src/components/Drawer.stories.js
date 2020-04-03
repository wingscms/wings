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
        <ul style={{ marginTop: '80px', padding: 0 }}>
          {['Link 1', 'Link 2', 'Link 3'].map(l => (
            <li
              style={{
                listStyle: 'none',
                padding: '10px',
                fontSize: '20px',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {l}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};
