import React from 'react';
import { Header } from '@wingscms/components';
import Entry from './Entry';

export default props => {
  return <Entry {...props} headerType={Header.Type.COVER} />;
};
