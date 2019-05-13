import styled from 'styled-components';
import { FLOAT } from './enums';
import { ALIGNLEFT, ALIGNRIGHT } from '../../styles/floats';

import { quote } from '../../img/icons';

export default styled.figure`
  clear: both;
  width: 100%;
  text-align: center;
  margin: 80px 0;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  padding: 40px 0 20px 0;
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
  &.pullquote-${FLOAT.NONE},
  &.pullquote-${FLOAT.LEFT},
  &.pullquote-${FLOAT.RIGHT} {
    margin: 40px 0;
    box-shadow: none;
    aside {
      font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
      font-size: 24px;
      line-height: 1.2;
      @media screen and (min-width: 800px) {
        font-size: 28px;
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
  }
  aside,
  blockquote {
    color: ${({ theme }) => theme.primaryColor};
    padding: 0;
  }
  aside {
    font-weight: ${({ theme }) => theme.fontWeightPullquote};
  }
  blockquote {
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeightBlockquote};
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
