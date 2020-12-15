import React from 'react';
import { color, text, select } from '@storybook/addon-knobs/react';
import { Link } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = ({ linkStyle }) => ({
  primaryColor: color('primaryColor'),
  secondaryColor: color('secondaryColor'),
  linkStyle: select('linkStyle', Link.Style, linkStyle),
  href: text('href', 'http://example.com'),
});

export const Basic = () => <Link {...props({ linkStyle: Link.Style.BASIC })}>This is a link</Link>;

export const LineGrow = () => (
  <Link {...props({ linkStyle: Link.Style.LINE_GROW })}>This is a link</Link>
);

export const SolidBackground = () => (
  <Link {...props({ linkStyle: Link.Style.SOLID_BACKGROUND })}>This is a link</Link>
);

export const NoStyling = () => (
  <Link {...props({ linkStyle: Link.Style.NONE })}>This is a link</Link>
);

export const wrapStory = paddingWrap;
