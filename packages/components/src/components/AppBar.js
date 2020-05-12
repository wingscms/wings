import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const Position = {
  BOTTOM: 'bottom',
  TOP: 'top',
};

const getPosition = ({ position, open }) => {
  switch (position) {
    case Position.TOP:
      return css`
        top: 0;
        left: 0;
        ${!open &&
          css`
            opacity: 0;
            transform: translateY(-100%);
          `}
      `;
    case Position.BOTTOM:
      return css`
        bottom: 0;
        left: 0;
        ${!open &&
          css`
            opacity: 0;
            transform: translateY(100%);
          `}
      `;
  }
};

const Container = styled.div`
  position: fixed;
  height: ${t(_ => _.appBarHeight)};
  opacity: 1;
  width: 100%;
  background-color: ${t(_ => _.appBarBackgroundColor)};
  z-index: 100;
  transform: none;
  transition: 0.1s all linear;
  ${getPosition}
`;

function AppBar({ open = true, position = Position.BOTTOM, ...props }) {
  return <Container open={open} position={position} {...fP(props)} />;
}

AppBar.Position = Position;

export default AppBar;
