import styled, { css } from 'styled-components';
import { getIntentColor, getTextColor } from '../lib/utils';

const outline = ({ color }) =>
  css`
    border: 2px solid ${color};
    background-color: transparent;
    color: ${color};
    padding: 12px 36px;
  `;

const getType = ({ color, type }) => {
  switch (type) {
    case 'outline':
      return outline({ color });
    default:
      return '';
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 14px;
        padding: 10px 20px;
      `;
    default:
      return '';
  }
};

const buttonStyles = ({ disabled, intent, size, theme, type }) => {
  const color = getIntentColor({ intent, theme });
  const typeCSS = getType({ color, theme, type });
  const sizeCSS = getSize({ size });
  const disabledCSS = !disabled
    ? null
    : css`
        background-color: grey !important;
        cursor: not-allowed !important;
      `;
  return css`
    background-color: ${color};
    color: ${getTextColor({ backgroundColor: color, theme })};
    text-decoration: none;
    background-image: none;
    font-size: 1rem;
    padding: 16px 40px;
    border: 0;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease-in-out;
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

export default styled.button`
  ${({ disabled, intent, size, theme = {}, type }) =>
    buttonStyles({ disabled, intent, size, theme, type })}
`;
