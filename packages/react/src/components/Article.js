import React from 'react';
import { Header } from '@wingscms/components';
import Entry from './Entry';

export default function Article(props) {
  return <Entry {...props} headerType={Header.Type.COVER} />;
}
