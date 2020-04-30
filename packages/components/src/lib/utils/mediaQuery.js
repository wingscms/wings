import { css } from '../styled';

export default (size, _css) =>
  console.log(_css) ||
  css`
    @media screen and (max-width: ${size}) {
      ${_css}
    }
  `;
