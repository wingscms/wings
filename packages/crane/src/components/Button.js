import styled, { css } from '../lib/styled';
import { getIntentColor, getContrastColor } from '../lib/utils';

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
  const colors = { dark: theme.textColorDark, light: theme.textColor };
  const color = getIntentColor({ intent, theme, defaultColor: '#dddddd' });
  const typeCSS = getType({ color, type });
  const sizeCSS = getSize({ size });
  const disabledCSS = !disabled
    ? null
    : css`
        background-color: ${theme.disabledColor || '#DDDDDD'} !important;
        color: ${getContrastColor({
      backgroundColor: theme.disabledColor || '#DDDDDD',
      colors,
      threshold: theme.contrastLuminanceThreshold || 50,
    })};
        cursor: not-allowed !important;
      `;
  return css`
    background-color: ${color};
    color: ${getContrastColor({ backgroundColor: color, colors })};
    text-decoration: none;
    background-image: none;
    font-size: 1rem;
    padding: 16px 40px;
    border: 0;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease-in-out;
    font-family: ${theme.headerFontFamily};
    font-weight: bold;
    border-radius: 4px;
    text-transform: ${theme.uppercaseTitles ? 'uppercase' : 'none'};
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
