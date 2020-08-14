import React, { useEffect, useRef } from 'react';
import fP from 'filter-invalid-dom-props';

import Header from './Header';
import Portal from '../Portal';
import Overlay from '../Overlay';
import _Surface from '../Surface';

import styled, { css } from '../../lib/styled';
import { t } from '../../theme';

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL_WIDTH: 'full_width',
};

const Position = {
  TOP_LEFT: 'top_left',
  TOP: 'top',
  TOP_RIGHT: 'top_right',
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  BOTTOM_LEFT: 'bottom_left',
  BOTTOM: 'bottom',
  BOTTOM_RIGHT: 'bottom_right',
};

const getSize = (_, { size }) => {
  switch (size) {
    case Size.SMALL:
      return css`
        width: 100%;
        max-width: 300px;
      `;
    case Size.LARGE:
      return css`
        width: 100%;
        max-width: 800px;
      `;
    case Size.FULL_WIDTH:
      return css`
        width: 100%;
      `;
    default:
      return css`
        width: 100%;
        max-width: 600px;
      `;
  }
};

const getHorizontalAlign = (_, { position }) => {
  switch (position) {
    case Position.TOP_LEFT:
    case Position.LEFT:
    case Position.BOTTOM_LEFT:
      return css`
        justify-content: flex-start;
      `;
    case Position.TOP_RIGHT:
    case Position.RIGHT:
    case Position.BOTTOM_RIGHT:
      return css`
        justify-content: flex-end;
      `;
    default:
      return css`
        justify-content: center;
      `;
  }
};

const getVerticalAlign = (_, { position }) => {
  switch (position) {
    case Position.TOP_LEFT:
    case Position.TOP:
    case Position.TOP_RIGHT:
      return css`
        align-items: flex-start;
      `;
    case Position.BOTTOM_LEFT:
    case Position.BOTTOM:
    case Position.BOTTOM_RIGHT:
      return css`
        align-items: flex-end;
      `;
    default:
      return css`
        align-items: center;
      `;
  }
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: ${t(_ => _.smallSpacing)};
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  ${t(getVerticalAlign)}
  ${t(getHorizontalAlign)}
`;

const Surface = styled(_Surface)`
  background-color: ${t(_ => _.dialogBackgroundColor)};
  ${t(getSize)}
`;

export default function Dialog({
  children,
  clickOutsideToClose = true,
  elevation = 2,
  onClose = () => {},
  overlayProps = {},
  overlay,
  size = Size.MEDIUM,
  position = Position.CENTER,
  ...props
}) {
  const dialogContainerRef = useRef(null);

  const closeOnOutsideClick = e => !dialogContainerRef.current.contains(e.target) && onClose();

  useEffect(() => {
    if (clickOutsideToClose && typeof window !== 'undefined') {
      window.addEventListener('click', closeOnOutsideClick);
      return () => window.removeEventListener('click', closeOnOutsideClick);
    }
  }, [clickOutsideToClose]);

  return (
    <>
      {overlay ? <Overlay {...overlayProps} /> : null}
      <Portal>
        <Wrapper position={position}>
          <Surface elevation={elevation} ref={dialogContainerRef} size={size} {...fP(props)}>
            {children}
          </Surface>
        </Wrapper>
      </Portal>
    </>
  );
}

Dialog.Size = Size;
Dialog.Position = Position;

Dialog.Header = Header;
