import React, { useEffect, useRef } from 'react';
import fP from 'filter-invalid-dom-props';
import Header from './Header';
import Portal from '../Portal';
import Overlay from '../Overlay';
import styled, { css } from '../../lib/styled';
import { t } from '../../theme';

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL_WIDTH: 'full_width',
};

const HorizontalAlign = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const VerticalAlign = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
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

const getHorizontalAlign = (_, { horizontalAlign }) => {
  switch (horizontalAlign) {
    case HorizontalAlign.LEFT:
      return css`
        justify-content: flex-start;
      `;
    case HorizontalAlign.RIGHT:
      return css`
        justify-content: flex-end;
      `;
    default:
      return css`
        justify-content: center;
      `;
  }
};

const getVerticalAlign = (_, { verticalAlign }) => {
  switch (verticalAlign) {
    case VerticalAlign.TOP:
      return css`
        align-items: flex-start;
      `;
    case VerticalAlign.BOTTOM:
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
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  ${t(getVerticalAlign)}
  ${t(getHorizontalAlign)}
`;

const ModalContainer = styled.div`
  background-color: ${t(_ => _.modalBackgroundColor)};
  box-shadow: ${t(_ => _.shadow)};
  ${t(getSize)}
`;

export default function Modal({
  children,
  clickOutsideToClose = true,
  onClose = () => {},
  overlayProps = {},
  overlay,
  size = Size.MEDIUM,
  horizontalAlign = HorizontalAlign.CENTER,
  verticalAlign = VerticalAlign.CENTER,
  ...props
}) {
  const modalContainerRef = useRef(null);

  const closeOnOutsideClick = e => !modalContainerRef.current.contains(e.target) && onClose();

  useEffect(() => {
    if (clickOutsideToClose && typeof window !== 'undefined') {
      window.addEventListener('click', closeOnOutsideClick);
      return () => window.removeEventListener('click', closeOnOutsideClick);
    }
  }, []);

  return (
    <>
      {overlay ? <Overlay {...overlayProps} /> : null}
      <Portal>
        <Wrapper horizontalAlign={horizontalAlign} verticalAlign={verticalAlign}>
          <ModalContainer ref={modalContainerRef} size={size} {...fP(props)}>
            {children}
          </ModalContainer>
        </Wrapper>
      </Portal>
    </>
  );
}

Modal.Size = Size;
Modal.VerticalAlign = VerticalAlign;
Modal.HorizontalAlign = HorizontalAlign;

Modal.Header = Header;
