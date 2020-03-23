import styled, { css } from '../lib/styled';
import { t } from '../theme';

const getSize = ({ size }) => {
  switch (size) {
    case Loading.Size.SMALL:
      return css`
        width: 30px;
        height: 30px;
      `;
    case Loading.Size.LARGE:
      return css`
        width: 120px;
        height: 120px;
      `;
    case Loading.Size.MEDIUM:
    default:
      return css`
        width: 60px;
        height: 60px;
      `;
  }
};

const loadingStyles = ({ intent, size, theme }) => {
  const color = theme.intentColor(intent);
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

const Loading = styled.div`
  ${t((theme, { disabled, intent, size, type }) =>
    loadingStyles({ disabled, intent, size, theme, type }),
  )}
`;

Loading.Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export default Loading;
