import styled from 'styled-components';
import { ALIGNLEFT, ALIGNRIGHT } from '@wingscms/crane';
import { FLOAT } from './enums';

import { quote } from '../../img/icons';

export default styled.figure`
  clear: both;
  width: 100%;
  text-align: center;
  margin: 80px 0;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  padding: 40px 0 20px 0;
  background-color: ${({ theme }) => theme.blockquoteBackgroundColor};
  a { 
      color: #000000;
      text-decoration: none;
      background-image: linear-gradient(
        120deg,
        ${({ theme }) => theme.primaryColor} 0%,
        ${({ theme }) => theme.primaryColor} 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 2px;
      background-position: 0% 100%;
      transition: background-size 0.1s linear;
      &:hover,
      &:focus {
        background-size: 100% 4px;
        background-image: linear-gradient(120deg, ${({ theme }) => theme.primaryColor} 0%, ${({
  theme,
}) => theme.primaryColor} 100%);
      }
    }
  @media screen and (max-width: 800px) {
      margin-top: 40px;
      margin-bottom: 40px;
  }
  &.pullquote-${FLOAT.NONE},
  &.pullquote-${FLOAT.LEFT},
  &.pullquote-${FLOAT.RIGHT} {
    background-color: ${({ theme }) => theme.pullquoteBackgroundColor};
    margin: 40px 0;
    padding: 20px;
    box-shadow: none;
    aside {
      font-family: ${({ theme }) => theme.headerFontFamily};
      font-size: 24px;
      line-height: 1.2;
      @media screen and (min-width: 800px) {
        font-size: 28px;
      }
    }
  }
  &.pullquote-${FLOAT.NONE} {
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
    text-align: left;
    @media screen and (max-width: 800px) {
      width: 100%;
      float: none;
    }
  }
  aside {
    color: ${({ theme }) => theme.pullquoteColor};
    padding: 0;
    font-weight: ${({ theme }) => theme.pullquoteFontWeight};
  }
  blockquote {
    color: ${({ theme }) => theme.blockquoteColor};
    background-color: ${({ theme }) => theme.blockquoteBackgroundColor};
    padding: 0;
    font-weight: ${({ theme }) => theme.blockquoteFontWeight};
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
`;
