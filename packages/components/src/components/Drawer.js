import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const Position = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
};

const getPosition = ({ open, position }) => {
  switch (position) {
    case Position.LEFT:
      return css`
        top: 0;
        left: 0;
        transform: ${open ? 'translateX(0%)' : 'translateX(-100%)'};
      `;
    case Position.TOP:
      return css`
        top: 0;
        left: 0;
        transform: ${open ? 'translateY(0%)' : 'translateY(-100%)'};
      `;
    case Position.BOTTOM:
      return css`
        top: 100vh;
        left: 0;
        transform: ${open ? 'translateY(-100%)' : 'translateY(0%)'};
      `;
    default:
      return css`
        top: 0;
        left: 100vw;
        transform: ${open ? 'translateX(-100%)' : 'translateX(0%)'};
      `;
  }
};

const getSize = ({ position, size }) => {
  switch (position) {
    case Position.TOP:
    case Position.BOTTOM:
      return css`
        height: 100vh;
        width: 100vw;
        @media screen and (min-width: 800px) {
          height: ${size};
        }
      `;
    default:
      return css`
        height: 100vh;
        width: 100vw;
        @media screen and (min-width: 800px) {
          width: ${size};
        }
      `;
  }
};

const Container = styled.div`
  position: fixed;
  background-color: ${t(_ => _.drawerBackgroundColor)};
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  animation-timing-function: ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: 1000;
  ${getPosition}
  ${getSize}
`;

export default function Drawer({
  open,
  children,
  position = Position.RIGHT,
  size = '400px',
  ...props
}) {
  return (
    <Container open={open} position={position} size={size} {...fP(props)}>
      {children}
    </Container>
  );
}

Drawer.Position = Position;
