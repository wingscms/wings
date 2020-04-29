import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const modularScale = (base, scale, steps) => {
  let size = base;
  for (let step = 0; step < steps; step++) {
    size = size * scale;
  }
  return size.toFixed(2);
};

const getFontSize = steps => (_, { fontSize, baseFontSize, scale }) =>
  `${fontSize ||
    _.heading1Size ||
    modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, steps)}px`;

const shared = css`
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
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

const Heading = ({ baseFontSize, fontSize, scale, rank = 1, uppercase, ...props }) => {
  const Comp = Components[rank > 5 ? 5 : rank];
  return (
    <Comp
      baseFontSize={baseFontSize}
      fontSize={fontSize}
      scale={scale}
      uppercase={uppercase && 'uppercase'}
      {...fP(props)}
    >
      {props.children}
    </Comp>
  );
};

Heading.modularScale = modularScale;

export default Heading;
