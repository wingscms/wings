import React, { forwardRef } from 'react';
import fP from 'filter-invalid-dom-props';
import { t } from '../theme';
import styled from '../lib/styled';

const Container = styled.div`
  background-color: ${t((_, { backgroundColor }) => backgroundColor || _.surfaceBackgroundColor)};
  border-radius: ${t((_, { borderRadius }) => borderRadius || _.surfaceBorderRadius)};
  box-shadow: ${t((_, { elevation }) =>
    !elevation || _.disableElevation
      ? null
      : `
    0px ${elevation * 1}px ${elevation * 3}px 0px rgba(0, 0, 0, 0.1),
    0px ${elevation * 2}px ${elevation * 3 + 7}px -7px rgba(0, 0, 0, 0.15),
    0px ${elevation * 3}px ${elevation * 6 + 7}px -7px rgba(0, 0, 0, 0.15),
    0px ${elevation * 4}px ${elevation * 9 + 50}px -50px rgba(0, 0, 0, 0.15),
    0px ${elevation * 2}px ${elevation * 1}px 0px rgba(0, 0, 0, 0.02),
    0px ${elevation * 4}px ${elevation * 8}px -${elevation * 8}px rgba(0, 0, 0, 0.15),
    0px ${elevation * 6}px ${elevation * 8 + 70}px -70px rgba(0, 0, 0, 0.2)`,
  )};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  transition: all 0.3s ease-in-out;
`;

function Surface(
  { backgroundColor, borderColor, borderRadius, children, elevation, height, width, ...props },
  ref,
) {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      elevation={elevation}
      height={height}
      width={width}
      ref={ref}
      {...fP(props)}
    >
      {children}
    </Container>
  );
}

export default forwardRef(Surface);
