import React from 'react';
import { color } from '@storybook/addon-knobs/react';
import { Link } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = () => ({
  primaryColor: color('primaryColor'),
  secondaryColor: color('secondaryColor'),
});

export const Basic = () => (
  <Link linkStyle={Link.Style.BASIC} href="http://example.com" {...props()}>
    This is a link
  </Link>
);

export const LineGrow = () => (
  <Link linkStyle={Link.Style.LINE_GROW} href="http://example.com" {...props()}>
    This is a link
  </Link>
);

export const NoStyling = () => (
  <Link linkStyle={Link.Style.NONE} href="http://example.com" {...props()}>
    This is a link
  </Link>
);

export const wrapStory = paddingWrap;
