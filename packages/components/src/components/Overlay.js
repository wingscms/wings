import React from 'react';
import fP from 'filter-invalid-dom-props';
import Portal from './Portal';
import styled from '../lib/styled';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 100;
`;

export default function Overlay({ children, backgroundColor = 'rgba(0, 0, 0, 0.3)', ...props }) {
  return (
    <Portal>
      <Root backgroundColor={backgroundColor} {...fP(props)}>
        {children}
      </Root>
    </Portal>
  );
}
