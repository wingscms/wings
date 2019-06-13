import styled, { css } from 'styled-components';
import { getIntentColor } from '../lib/utils';

const getSize = ({ size }) => {
  switch (size) {
    case 'small':
      return css`
        width: 30px;
        height: 30px;
      `;
    case 'large':
      return css`
        width: 120px;
        height: 120px;
      `;
    case 'medium':
    default:
      return css`
        width: 60px;
        height: 60px;
      `;
  }
};

const loadingStyles = ({ intent, size, theme }) => {
  const color = getIntentColor({ intent, theme });
  const sizeCSS = getSize({ size });

  return css`
    display: block;
    position: relative;
    margin: 20px auto;
    border: 3px solid #eee;
    border-top: 3px solid ${color};
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    ${sizeCSS};

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
};

export default styled.div`
  ${({ disabled, intent, size, theme = {}, type }) =>
    loadingStyles({ disabled, intent, size, theme, type })}
`;
