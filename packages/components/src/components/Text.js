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

const getStyles = (
  _,
  { baseFontSize, baseMobileFontSize, baseTabletFontSize, dropCap, dropCapSize = '4em' },
) => {
  const styles = css`
    font-size: ${baseFontSize || _.baseFontSize};
    ${dropCap
      ? css`
          &::first-letter {
            font-weight: bold;
            color: ${_.primaryColor};
            float: left;
            line-height: 1;
            margin-right: 0.15em;
            font-size: ${dropCapSize};
            font-family: ${({ theme }) => theme.headingFont};
          }
        `
      : null}
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
  dropCap,
  dropCapSize,
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
      dropCap={dropCap}
      dropCapSize={dropCapSize}
      {...fP(props)}
    >
      {children}
    </_Text>
  );
}

Text.getStyles = getStyles;
