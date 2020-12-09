import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';

import _Surface from './Surface';

import { t } from '../theme';

const Position = {
  BOTTOM: 'bottom',
  TOP: 'top',
};

const getPosition = ({ position, hide }) => {
  switch (position) {
    case Position.TOP:
      return css`
        top: 0;
        left: 0;
        ${hide &&
          css`
            opacity: 0;
            transform: translateY(-100%);
          `}
      `;
    case Position.BOTTOM:
      return css`
        bottom: 0;
        left: 0;
        ${hide &&
          css`
            opacity: 0;
            transform: translateY(100%);
          `}
      `;
  }
};

const Surface = styled(_Surface)`
  position: fixed;
  border-radius: 0;
  height: ${t(_ => _.appBarHeight)};
  opacity: 1;
  width: 100%;
  background-color: ${t(_ => _.appBarBackgroundColor)};
  transform: none;
  transition: 0.1s all linear;
  ${getPosition}
`;

function AppBar({ elevation = 1, children, hide, position = Position.TOP, ...props }) {
  return (
    <Surface elevation={elevation} hide={hide} position={position} {...fP(props)}>
      {children}
    </Surface>
  );
}

AppBar.Position = Position;

export default AppBar;
