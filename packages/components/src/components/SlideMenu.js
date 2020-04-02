import React from 'react';
import styled from '../lib/styled';
import { t } from '../theme';

const Position = {
  LEFT: 'left',
  RIGHT: 'right',
};

const getTransform = ({ active, position }) => {
  if (position === 'left') {
    return active ? 'translateX(0%)' : 'translateX(-100%)';
  }
  return active ? 'translateX(-100%)' : 'translateX(0%)';
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${t((_, { backgroundColor }) => backgroundColor || _.menuBackgroundColor)};
  top: 0;
  left: ${({ position }) => (position === 'left' ? 0 : '100vw')};
  transform: ${props => getTransform(props)};
  transition: 0.2s all ease-in-out;
  z-index: 1000;
  @media screen and (min-width: 800px) {
    width: ${({ width }) => width};
  }
`;

const SlideMenu = ({
  active,
  backgroundColor,
  children,
  position = Position.RIGHT,
  width = '400px',
  ...props
}) => {
  return (
    <Container
      active={active}
      backgroundColor={backgroundColor}
      position={position}
      width={width}
      {...props}
    >
      {children}
    </Container>
  );
};

SlideMenu.Position = Position;

export default SlideMenu;
