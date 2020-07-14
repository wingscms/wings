import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import { modularScale } from '../lib/utils';

const shared = css`
  font-family: ${t(_ => _.headerFontFamily)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${t((_, { transform }) => transform || _.titleTransform)};
  line-height: 1.2;
`;

const getSpacing = (noSpacing, _css = css``) => {
  if (noSpacing)
    return css`
      margin: 0;
      padding: 0;
    `;
  return _css;
};

const getStyles = steps => (
  _,
  {
    fontSize: _fontSize,
    baseFontSize,
    baseMobileFontSize,
    baseTabletFontSize,
    scaleRatio: _scaleRatio,
    noSpacing,
  },
) => {
  const scaleRatio = _scaleRatio || _.headingScaleRatio;

  const fontSize = base => _fontSize || modularScale(base, scaleRatio, steps);

  const styles = css`
    font-size: ${fontSize(baseFontSize || _.baseFontSize)};
    color: ${_.headingColor};
    ${getSpacing(
      noSpacing,
      css`
        margin-bottom: ${_.smallSpacing};
      `,
    )}
  `;
  const tabletStyles = _.tabletQuery(
    css`
      font-size: ${fontSize(baseTabletFontSize || _.baseTabletFontSize)};
      ${getSpacing(
        noSpacing,
        css`
          margin-bottom: ${_.extraSmallSpacing};
        `,
      )}
    `,
  );
  const mobileStyles = _.mobileQuery(
    css`
      font-size: ${fontSize(baseMobileFontSize || _.baseMobileFontSize)};
      ${getSpacing(
        noSpacing,
        css`
          margin-bottom: ${_.extraSmallSpacing};
        `,
      )}
    `,
  );

  return css`
    ${styles}
    ${tabletStyles}
    ${mobileStyles}
    ${shared}
  `;
};

const H1 = styled.h1`
  ${t(getStyles(4))}
`;

const H2 = styled.h2`
  ${t(getStyles(3))}
`;

const H3 = styled.h3`
  ${t(getStyles(2))}
`;

const H4 = styled.h4`
  ${t(getStyles(1))}
`;

const H5 = styled.h5`
  ${t(getStyles(0))}
`;

const H6 = styled.h6`
  ${t(getStyles(0))}
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
  children,
  fontSize,
  noSpacing,
  scaleRatio,
  rank = 1,
  uppercase,
  ...props
}) {
  if (rank < 1 || rank > 6) throw new Error("that's not a valid rank for Heading");
  const Comp = Components[rank];
  return (
    <Comp
      baseFontSize={baseFontSize}
      baseMobileFontSize={baseMobileFontSize}
      baseTabletFontSize={baseTabletFontSize}
      fontSize={fontSize}
      scaleRatio={scaleRatio}
      transform={uppercase && 'uppercase'}
      noSpacing={noSpacing}
      {...fP(props)}
    >
      {children}
    </Comp>
  );
}

Heading.getStyles = getStyles;
