import React from 'react';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const Basic = css`
  color: ${t((_, { primaryColor }) => primaryColor || _.linkColor)};
  transition: 0.1s all linear;
  &:hover,
  &:focus {
    color: ${t((_, { secondaryColor }) => secondaryColor || _.linkSecondaryColor)};
  }
`;

const LineGrow = css`
  color: ${t(_ => _.textColor)};
  text-decoration: none;
  background-image: linear-gradient(
    120deg,
    ${t((_, { primaryColor }) => primaryColor || _.linkColor)} 0%,
    ${t((_, { primaryColor }) => primaryColor || _.linkColor)} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: 0% 100%;
  transition: background-size 0.1s linear;
  &:hover,
  &:focus {
    background-size: 100% 3px;
    background-image: linear-gradient(
      120deg,
      ${t((_, { primaryColor }) => primaryColor || _.linkColor)} 0%,
      ${t((_, { primaryColor }) => primaryColor || _.linkColor)} 100%
    );
  }
`;

const SolidBackground = css`
  color: ${t((_, { primaryColor }) =>
    _.contrastColor({ backgroundColor: primaryColor || _.linkColor }),
  )} !important;
  text-decoration: none;
  background: ${t((_, { primaryColor }) => primaryColor || _.linkColor)};
  &:hover,
  &:focus {
    color: ${t((_, { primaryColor }) =>
      _.contrastColor({ backgroundColor: _.darken(primaryColor || _.linkColor) }),
    )} !important;
    background: ${t((_, { primaryColor }) => _.darken(primaryColor || _.linkColor))};
  }
`;

const Style = {
  BASIC: 'basic',
  LINE_GROW: 'lineGrow',
  SOLID_BACKGROUND: 'solidBackground',
  NONE: 'none',
};

const CSS = {
  [Style.BASIC]: Basic,
  [Style.LINE_GROW]: LineGrow,
  [Style.SOLID_BACKGROUND]: SolidBackground,
  [Style.NONE]: css``,
};

const _Link = styled.a`
  cursor: pointer;
  ${t((_, { linkStyle }) => CSS[linkStyle] || CSS[_.linkStyle])}
`;

export default function Link({ primaryColor, secondaryColor, linkStyle, ...props }) {
  return (
    <_Link
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      linkStyle={linkStyle}
      {...props}
    />
  );
}

Link.Style = Style;
