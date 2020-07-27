import React, { useEffect, useRef } from 'react';
import fP from 'filter-invalid-dom-props';
import Header from './Header';
import Portal from '../Portal';
import Overlay from '../Overlay';
import styled from '../../lib/styled';
import { t } from '../../theme';

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const VerticalAlign = {
  Top: 'top',
  Center: 'center',
  Middle: 'center',
  Bottom: 'bottom',
};

const HorizontalAlign = {
  Left: 'left',
  Center: 'center',
  Middle: 'center',
  Right: 'right',
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 50%;
  height: 50%;
  background-color: ${t(_ => _.modalBackgroundColor)};
  box-shadow: ${t(_ => _.shadow)};
`;

export default function Modal({
  children,
  clickOutsideToClose = true,
  onClose = () => {},
  overlayProps = {},
  overlay,
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
        <Wrapper>
          <ModalContainer ref={modalContainerRef} {...fP(props)}>
            {children}
          </ModalContainer>
        </Wrapper>
      </Portal>
    </>
  );
}

Modal.Size = Size;
Modal.VerticalAlign = VerticalAlign;
Modal.HoritzontalAlign = HorizontalAlign;

Modal.Header = Header;
