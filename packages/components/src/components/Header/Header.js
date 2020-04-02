import React from 'react';
import SimpleHeader from './SimpleHeader';
import Cover from './Cover';

const Type = {
  SIMPLE: 'simple',
  COVER: 'cover',
};

const headers = {
  [Type.SIMPLE]: SimpleHeader,
  [Type.COVER]: Cover,
};

const Header = ({ type = Type.SIMPLE, ...props }) => {
  const Header = headers[type];
  return <Header {...props} />;
};

export default Header;

Header.Type = Type;
