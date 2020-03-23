import React from 'react';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Loading from './Loading';

const outline = ({ color }) =>
  css`
    border: 2px solid ${color};
    background-color: transparent;
    color: ${color};
    padding: 12px 36px;
  `;

const getType = ({ color, type }) => {
  switch (type) {
    case Button.Type.OUTLINE:
      return outline({ color });
    default:
      return '';
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case Button.Size.SMALL:
      return css`
        font-size: 14px;
        padding: 10px 20px;
      `;
    default:
      return '';
  }
};

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
      `;

  return css`
    background-color: ${color};
    color: ${theme.contrastColor({ backgroundColor: color })};
    text-decoration: none;
    background-image: none;
    font-size: 1rem;
    padding: 16px 40px;
    border: 0;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease-in-out;
    font-family: ${theme.headerFontFamily}
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

function Button({ disabled, loading, children, ...props }) {
  return (
    <button disabled={loading || disabled} {...props}>
      {loading ? (
        <Loading intent={props.intent} style={{ margin: 0 }} size={Loading.Size.SMALL} />
      ) : (
        children
      )}
    </button>
  );
}

Button.Size = {
  MEDIUM: 'medium',
  SMALL: 'small',
};

Button.Type = {
  NORMAL: 'normal',
  OUTLINE: 'outline',
};

export default styled(Button)`
  ${t((theme, { disabled, intent, size, type }) =>
    buttonStyles({ disabled, intent, size, theme, type }),
  )}
`;
