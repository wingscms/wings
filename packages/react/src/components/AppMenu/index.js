import React from 'react';
import Default from './Default';

const Type = {
  DEFAULT: 'default',
};

const menus = {
  [Type.DEFAULT]: Default,
};

export default function AppMenu({ type = Type.DEFAULT, ...props }) {
  const Menu = menus[type];
  return <Menu {...props} />;
}

AppMenu.Type = Type;
