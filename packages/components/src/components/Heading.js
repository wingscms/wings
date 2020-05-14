import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import { modularScale } from '../lib/utils';

const getStyles = steps => (
  _,
  {
    fontSize: _fontSize,
    baseFontSize,
    baseMobileFontSize,
    baseTabletFontSize,
    scaleRatio: _scaleRatio,
  },
) => {
  const scaleRatio = _scaleRatio || _.headingScaleRatio;

  const fontSize = base => _fontSize || modularScale(base, scaleRatio, steps);

  const styles = css`
    font-size: ${fontSize(baseFontSize || _.baseFontSize)};
    margin-bottom: ${_.smallSpacing};
  `;
  const tabletStyles = _.tabletQuery(
    css`
      font-size: ${fontSize(baseTabletFontSize || _.baseTabletFontSize)};
      margin-bottom: ${_.extraSmallSpacing};
    `,
  );
  const mobileStyles = _.mobileQuery(
    css`
      font-size: ${fontSize(baseMobileFontSize || _.baseMobileFontSize)};
      margin-bottom: ${_.extraSmallSpacing};
    `,
  );

  return css`
    ${styles}
    ${tabletStyles}
    ${mobileStyles}
  `;
};

const shared = css`
  font-family: ${t(_ => _.headerFontFamily)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  line-height: 1.2;
`;

const H1 = styled.h1`
  ${t(getStyles(4))}
  ${shared}
`;

const H2 = styled.h2`
  ${t(getStyles(3))}
  ${shared}
`;

const H3 = styled.h3`
  ${t(getStyles(2))}
  ${shared}
`;

const H4 = styled.h4`
  ${t(getStyles(1))}
  ${shared}
`;

const H5 = styled.h5`
  ${t(getStyles(0))}
  ${shared}
`;

const H6 = styled.h6`
  ${t(getStyles(0))}
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
