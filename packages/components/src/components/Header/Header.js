import React from 'react';
import Simple from './Simple';
import Cover from './Cover';

const Type = {
  SIMPLE: 'simple',
  COVER: 'cover',
};

const headers = {
  [Type.SIMPLE]: Simple,
  [Type.COVER]: Cover,
};

export default function Header({ type = Type.SIMPLE, ...props }) {
  const Header = headers[type];
  return <Header {...props} />;
}

Header.Type = Type;
