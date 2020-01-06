import styled from '../../lib/styled';
import { ALIGNLEFT, ALIGNRIGHT, wide } from '@wingscms/crane';
import { FLOAT } from './enums';

import { quote } from '../../img/icons';

export default styled.figure`
  clear: both;
  width: 100%;
  text-align: center;
  margin: ${({ theme }) => theme.mediumSpacing} 0;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  padding: 30px;
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
      font-size: 1.8em;
      line-height: 1.2;
    }
    figcaption {
      margin-top: 20px;
      font-size: 0.8em;
    }
  }
  &.pullquote-${FLOAT.NONE} {
    ${wide};
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
    font-size: 0.9em;
    font-style: italic;
    text-align: left;
    position: relative;
    margin: 0;
    &:after {
      content: '';
      position: absolute;
      height: 50px;
      width: 50px;
      background-image: url('${quote}');
      background-repeat: no-repeat;
      left: 50%;
      transform: translateX(-50%);
      top: -50px;
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
