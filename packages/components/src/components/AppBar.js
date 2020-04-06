import React from 'react';
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
  height: ${t((_, { height }) => height || _.appBarHeight)};
  opacity: 1;
  width: 100%;
  background-color: ${t((_, { backgroundColor }) => backgroundColor || _.appBarBackgroundColor)};
  z-index: ${({ zIndex }) => zIndex};
  transform: none;
  transition: 0.1s all linear;
  ${getPosition}
`;

const AppBar = ({
  backgroundColor,
  height,
  open = true,
  position = Position.BOTTOM,
  zIndex = 100,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      height={height}
      open={open}
      position={position}
      zIndex={zIndex}
      {...props}
    />
  );
};

AppBar.Position = Position;

export default AppBar;
