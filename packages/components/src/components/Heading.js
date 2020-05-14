import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import { modularScale } from '../lib/utils';
import { BREAKPOINT_TYPE } from '../lib/constants';

const getStyles = (steps, breakpoint) => (
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
          margin-bottom: ${_.extraSmallSpacing};
        `,
      );
    case BREAKPOINT_TYPE.TABLET:
      return _.tabletQuery(
        css`
          font-size: ${fontSize};
          margin-bottom: ${_.extraSmallSpacing};
        `,
      );
    default:
      return css`
        font-size: ${fontSize};
        margin-bottom: ${_.smallSpacing};
      `;
  }
};

const shared = css`
  font-family: ${t(_ => _.headerFontFamily)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  line-height: 1.2;
`;

const H1 = styled.h1`
  ${t(getStyles(4))}
  ${t(getStyles(4, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(4, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H2 = styled.h2`
  ${t(getStyles(3))}
  ${t(getStyles(3, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(3, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H3 = styled.h3`
  ${t(getStyles(2))}
  ${t(getStyles(2, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(2, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H4 = styled.h4`
  ${t(getStyles(1))}
  ${t(getStyles(1, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(1, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H5 = styled.h5`
  ${t(getStyles(0))}
  ${t(getStyles(0, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(0, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
`;

const H6 = styled.h6`
  ${t(getStyles(0))}
  ${t(getStyles(0, BREAKPOINT_TYPE.TABLET))}
  ${t(getStyles(0, BREAKPOINT_TYPE.MOBILE))}
  ${shared}
  font-style: italic;
`;

const Components = {
  1: H1,
  2: H2,
  3: H3,
  4: H4,
  5: H5,
  6: H6,
};

export default function Heading({
  baseFontSize,
  baseMobileFontSize,
  baseTabletFontSize,
  fontSize,
  scaleRatio,
  rank = 1,
  uppercase,
  ...props
}) {
  const Comp = Components[rank > 6 ? 6 : rank];
  return (
    <Comp
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
}
