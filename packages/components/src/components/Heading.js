import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import { modularScale } from '../lib/utils';

const getFontSize = steps => (_, { fontSize, baseFontSize, scaleRatio }) =>
  `${fontSize ||
    _.heading1Size ||
    modularScale(baseFontSize || _.baseFontSize, scaleRatio || _.headingScaleRatio, steps)}px`;

const shared = css`
  font-family: ${t(_ => _.headerFontFamily)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
`;

const H1 = styled.h1`
  font-size: ${t(getFontSize(4))};
  ${shared}
`;

const H2 = styled.h2`
  font-size: ${t(getFontSize(3))};
  ${shared}
`;

const H3 = styled.h3`
  font-size: ${t(getFontSize(2))};
  ${shared}
`;

const H4 = styled.h4`
  font-size: ${t(getFontSize(1))};
  ${shared}
`;

const H5 = styled.h5`
  font-size: ${t(getFontSize(0))};
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
