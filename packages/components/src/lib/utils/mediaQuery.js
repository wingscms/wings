import { css } from '../styled';

export default (size, _css, query = 'max-width') =>
  css`
    @media screen and (${query}: ${size}) {
      ${_css}
    }
  `;
