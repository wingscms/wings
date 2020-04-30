import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import { modularScale } from '../lib/utils';
import { BREAKPOINT_TYPE } from '../lib/constants';

const getFontSize = (steps, breakpoint) => (
  _,
  {
    fontSize: _fontSize,
    baseFontSize,
    baseMobileFontSize,
    baseTabletFontSize,
    scaleRatio: _scaleRatio,
  },
) => {
  let base;
  switch (breakpoint) {
    case BREAKPOINT_TYPE.MOBILE:
      base = baseMobileFontSize || _.baseMobileFontSize;
      break;
    case BREAKPOINT_TYPE.TABLET:
      base = baseTabletFontSize || _.baseTabletFontSize;
      break;
    default:
      base = baseFontSize || _.baseFontSize;
  }
  const scaleRatio = _scaleRatio || _.headingScaleRatio;
  const fontSize = _fontSize || modularScale(base, scaleRatio, steps);
  switch (breakpoint) {
    case BREAKPOINT_TYPE.MOBILE:
      return _.mobileQuery(
        css`
          font-size: ${fontSize};
        `,
      );
    case BREAKPOINT_TYPE.TABLET:
      return _.tabletQuery(
        css`
          font-size: ${fontSize};
        `,
      );
    default:
      return `font-size: ${fontSize};`;
  }
};

const shared = css`
  font-family: ${t(_ => _.headerFontFamily)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
`;

const H1 = styled.h1`
  ${t(getFontSize(4))}
  ${t(getFontSize(4, BREAKPOINT_TYPE.TABLET))}
  ${t(getFontSize(4, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H2 = styled.h2`
  ${t(getFontSize(3))}
  ${t(getFontSize(3, BREAKPOINT_TYPE.TABLET))}
  ${t(getFontSize(3, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H3 = styled.h3`
  ${t(getFontSize(2))}
  ${t(getFontSize(2, BREAKPOINT_TYPE.TABLET))}
  ${t(getFontSize(2, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H4 = styled.h4`
  ${t(getFontSize(1))}
  ${t(getFontSize(1, BREAKPOINT_TYPE.TABLET))}
  ${t(getFontSize(1, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H5 = styled.h5`
  ${t(getFontSize(0))}
  ${t(getFontSize(0, BREAKPOINT_TYPE.TABLET))}
  ${t(getFontSize(0, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const Components = {
  1: H1,
  2: H2,
  3: H3,
  4: H4,
  5: H5,
};

const TextAlign = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

const Heading = ({
  baseFontSize,
  baseMobileFontSize,
  baseTabletFontSize,
  fontSize,
  scaleRatio,
  rank = 1,
  textAlign = TextAlign.LEFT,
  uppercase,
  ...props
}) => {
  const Comp = Components[rank > 5 ? 5 : rank];
  return (
    <Comp
      textAlign={textAlign}
      baseFontSize={baseFontSize}
      baseMobileFontSize={baseMobileFontSize}
      baseTabletFontSize={baseTabletFontSize}
      fontSize={fontSize}
      scaleRatio={scaleRatio}
      uppercase={uppercase && 'uppercase'}
      {...fP(props)}
    >
      {props.children}
    </Comp>
  );
};

Heading.TextAlign = TextAlign;

export default Heading;
