import React from 'react';
import SimpleHeader from './SimpleHeader';

export const HEADER_TYPE = {
  SIMPLE: 'simple',
};

const headers = {
  [HEADER_TYPE.SIMPLE]: SimpleHeader,
};

export default ({ type = 'simple', ...props }) => {
  const Header = headers[type];
  return <Header {...props} />;
};
