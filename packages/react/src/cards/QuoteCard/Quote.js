import styled from 'styled-components';
import { FLOAT } from './enums';
import { ALIGNLEFT, ALIGNRIGHT } from './floats';

import { quote } from './icons';

export default styled.figure`
  clear: both;
  width: 100%;
  text-align: center;
  margin: ${({ theme }) => theme.largeSpacing} 0;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.mediumSpacing} 0 ${({ theme }) => theme.smallSpacing} 0;
  &.pullquote-${FLOAT.NONE},
  &.pullquote-${FLOAT.LEFT},
  &.pullquote-${FLOAT.RIGHT} {
    margin: ${({ theme }) => theme.mediumSpacing} 0;
    box-shadow: none;
    aside {
      font-family: initial;
      font-size: 40px;
      line-height: 1.2;
      @media screen and (max-width: 800px) {
        font-size: 24px;
      }
    }
  }
  &.pullquote-${FLOAT.NONE} {
    padding: 0;
    figcaption {
      margin-top: 20px;
    }
  }
  &.pullquote-${FLOAT.LEFT} {
    ${ALIGNLEFT};
  }
  &.pullquote-${FLOAT.RIGHT} {
    ${ALIGNRIGHT};
  }
  &.pullquote-${FLOAT.LEFT},
  &.pullquote-${FLOAT.RIGHT} {
    clear: none;
    padding: 0.75rem;
    text-align: left;
    @media screen and (max-width: 800px) {
      width: 100%;
      float: none;
    }
    @media screen and (min-width: 400px) {
      padding: 1.5rem;
    }
    @media screen and (min-width: 1080px) {
      padding: 2rem;
    }
  }
  aside,
  blockquote {
    color: ${({ theme }) => theme.primaryColor};
    padding: 0;
    font-weight: 900;
  }
  blockquote {
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    font-weight: 300;
    text-align: left;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      height: 50px;
      width: 50px;
      background-image: url('${quote}');
      background-repeat: no-repeat;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
    }
  }
  figcaption {
    margin-top: 1rem;
    color: ${({ theme }) => theme.textColor};
    &:before {
      content: '— ';
    }
  }
  a {
    color: black;
  }
`;
