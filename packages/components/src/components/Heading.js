import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';

const modularScale = (base, scale, steps) => {
  let size = base;
  for (let step = 0; step < steps; step++) {
    size = size * scale;
  }
  return size.toFixed(2);
};

const H1 = styled.h1`
  font-size: ${t(
    (_, { fontSize, baseFontSize, scale }) =>
      fontSize ||
      _.heading1Size ||
      modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, 4),
  )}px;
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
`;

const H2 = styled.h2`
  font-size: ${t(
    (_, { fontSize, baseFontSize, scale }) =>
      fontSize ||
      _.heading2Size ||
      modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, 3),
  )}px;
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
`;

const H3 = styled.h3`
  font-size: ${t(
    (_, { fontSize, baseFontSize, scale }) =>
      fontSize ||
      _.heading3Size ||
      modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, 2),
  )}px;
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
`;

const H4 = styled.h4`
  font-size: ${t(
    (_, { fontSize, baseFontSize, scale }) =>
      fontSize ||
      _.heading4Size ||
      modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, 1),
  )}px;
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
`;

const H5 = styled.h5`
  font-size: ${t(
    (_, { fontSize, baseFontSize, scale }) =>
      fontSize ||
      _.heading5Size ||
      modularScale(baseFontSize || _.baseFontSize, scale || _.headingScale, 0),
  )}px;
  text-transform: ${t((_, { uppercase }) => uppercase || _.uppercaseTitles)};
  font-family: ${t(_ => _.headerFontFamily)};
`;

const Type = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
};

const Components = {
  [Type.h1]: H1,
  [Type.h2]: H2,
  [Type.h3]: H3,
  [Type.h4]: H4,
  [Type.h5]: H5,
};

const Heading = ({ baseFontSize, fontSize, scale, type = Type.h1, uppercase, ...props }) => {
  const Comp = Components[type];
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

Heading.Type = Type;
Heading.modularScale = modularScale;

export default Heading;
