import { css } from 'styled-components';

export default css`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
