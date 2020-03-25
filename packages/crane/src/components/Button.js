import React from 'react';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Loading from './Loading';

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const Type = {
  NORMAL: 'normal',
  OUTLINE: 'outline',
};

const LOADING_SIZE = {
  [Size.SMALL]: Loading.Size.MINI,
  [Size.MEDIUM]: Loading.Size.SMALL,
};

const getType = ({ color, type }) => {
  switch (type) {
    case Type.OUTLINE:
      return css`
        border: 2px solid ${color};
        background-color: transparent;
        color: ${color};
        padding: 12px 36px;
      `;
    default:
      return '';
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case Size.SMALL:
      return css`
        font-size: 14px;
        padding: 10px 20px;
      `;
    default:
      return '';
  }
};

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const buttonStyles = ({ disabled, intent, size, theme, type }) => {
  const color = theme.intentColor(intent);
  const typeCSS = getType({ color, type });
  const sizeCSS = getSize({ size });
  const disabledCSS = !disabled
    ? null
    : css`
        background-color: ${theme.disabledColor} !important;
        color: ${theme.contrastColor({ backgroundColor: theme.disabledColor })};
        cursor: not-allowed !important;
        ${LoadingWrapper} {
          background-color: ${theme.disabledColor} !important;
        }
      `;

  return css`
    background-color: ${color};
    color: ${theme.contrastColor({ backgroundColor: color })};
    text-decoration: none;
    background-image: none;
    ${LoadingWrapper} {
      background-color: ${color};
    }
    font-size: 1rem;
    padding: 16px 40px;
    border: 0;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease-in-out;
    font-family: ${theme.headerFontFamily};
    font-weight: bold;
    border-radius: 4px;
    text-transform: ${theme.titleTransform};
    &:hover,
    &:active {
      opacity: 0.8;
      background-image: none;
      text-decoration: none;
    }
    &:active {
      transform: translateY(1px);
    }
    ${typeCSS}
    ${sizeCSS}
    ${disabledCSS}
  `;
};

function Button({ disabled, loading, children, size = Size.MEDIUM, ...props }) {
  return (
    <button disabled={loading || disabled} {...props}>
      {loading ? (
        <LoadingWrapper>
          <Loading intent={props.intent} style={{ margin: 0 }} size={LOADING_SIZE[size]} />
        </LoadingWrapper>
      ) : null}
      {children}
    </button>
  );
}

Button.Size = Size;
Button.Type = Type;

export default styled(Button)`
  ${t((theme, props) =>
    buttonStyles({ ...props, theme, disabled: props.loading || props.disabled }),
  )}
`;
