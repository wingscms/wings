import React from 'react';
import Basic from './Basic';

const Type = {
  BASIC: 'basic',
};

const menus = {
  [Type.BASIC]: Basic,
};

export default function AppMenu({ type = Type.BASIC, ...props }) {
  const Menu = menus[type];
  return <Menu {...props} />;
}

AppMenu.Type = Type;
