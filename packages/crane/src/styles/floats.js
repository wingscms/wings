import { css } from '../lib/styled';

export const ALIGNLEFT = css`
  float: left;
  margin: 0.5rem -10px;
  width: calc(100% + 20px);
  @media screen and (min-width: 420px) {
    margin-right: 1.5rem;
    width: 40%;
  }
  @media screen and (min-width: 1080px) {
    margin-right: 2rem;
    margin-left: -8rem;
    width: 50%;
  }
`;

export const ALIGNRIGHT = css`
  float: right;
  margin: 0.5rem -10px;
  width: calc(100% + 20px);
  @media screen and (min-width: 420px) {
    margin-left: 1.5rem;
    width: 40%;
  }
  @media screen and (min-width: 1080px) {
    margin-left: 2rem;
    margin-right: -8rem;
    width: 50%;
  }
`;
