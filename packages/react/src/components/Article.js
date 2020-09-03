import React from 'react';
import { Header, useTheme } from '@wingscms/components';
import Entry from './Entry';

export default function Article({ contentProps: _contentProps, ...props }) {
  const theme = useTheme();
  const contentProps = {
    additionalProps: {
      dropCap: theme.dropCap,
    },
    ..._contentProps,
  };
  return <Entry {...props} contentProps={contentProps} headerType={Header.Type.COVER} />;
}
