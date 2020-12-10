import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const getSpacing = ({ noSpacing }) => {
  if (noSpacing)
    return css`
      margin: 0;
      padding: 0;
    `;
  return '';
};

const getStyles = (_, { baseFontSize, baseMobileFontSize, baseTabletFontSize } = {}) => {
  const styles = css`
    font-size: ${baseFontSize || _.baseFontSize};
  `;
  const tabletStyles = _.tabletQuery(
    css`
      font-size: ${baseTabletFontSize || _.baseTabletFontSize};
    `,
  );
  const mobileStyles = _.mobileQuery(
    css`
      font-size: ${baseMobileFontSize || _.baseMobileFontSize};
    `,
  );

  return css`
    color: ${t(_ => _.textColor)};
    font-family: ${t(_ => _.textFontFamily)};
    line-height: ${t(_ => _.textLineHeight)};
    letter-spacing: ${t(_ => _.textLetterSpacing)};
    ${getSpacing}
    ${styles}
    ${tabletStyles}
    ${mobileStyles}
  `;
};

const _Text = styled.p`
  ${t(getStyles)}
`;

export default function Text({
  baseFontSize,
  baseMobileFontSize,
  baseTabletFontSize,
  children,
  uppercase,
  noSpacing,
  ...props
}) {
  return (
    <_Text
      baseFontSize={baseFontSize}
      baseMobileFontSize={baseMobileFontSize}
      baseTabletFontSize={baseTabletFontSize}
      noSpacing={noSpacing}
      {...fP(props)}
    >
      {children}
    </_Text>
  );
}

Text.getStyles = getStyles;
