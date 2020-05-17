import { ALIGNLEFT, ALIGNRIGHT, wide } from '@wingscms/components';
import styled from '../../../lib/styled';
import { FLOAT } from './enums';

import { quote } from '../../../img/icons';
import { t } from '../../../theme';

export default styled.figure`
  clear: both;
  width: 100%;
  text-align: center;
  margin: ${t(_ => _.mediumSpacing)} 0;
  box-shadow:  ${t(_ => _.shadow)};
  padding: 30px;
  background-color:  ${t(_ => _.blockquoteBackgroundColor)};
  a { 
      color: #000000;
      text-decoration: none;
      background-image: linear-gradient(
        120deg,
         ${t(_ => _.primaryColor)} 0%,
         ${t(_ => _.primaryColor)} 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 2px;
      background-position: 0% 100%;
      transition: background-size 0.1s linear;
      &:hover,
      &:focus {
        background-size: 100% 4px;
        background-image: linear-gradient(120deg,  ${t(_ => _.primaryColor)} 0%, ${t(
  _ => _.primaryColor,
)} 100%);
      }
    }
  @media screen and (max-width: 800px) {
      margin-top: 40px;
      margin-bottom: 40px;
  }
  &.pullquote-${FLOAT.NONE},
  &.pullquote-${FLOAT.LEFT},
  &.pullquote-${FLOAT.RIGHT} {
    background-color: ${t(_ => _.pullquoteBackgroundColor)};
    margin: 40px 0;
    padding: 20px;
    box-shadow: none;
    aside {
      font-family: ${t(_ => _.headerFontFamily)};
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
    aside {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
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
    color: ${t(_ => _.pullquoteTextColor)};
    padding: 0;
    font-weight: bold;
  }
  blockquote {
    color:  ${t(_ => _.blockquoteTextColor)};
    background-color:  ${t(_ => _.blockquoteTextColor)};
    padding: 0;
    font-size: 0.9em;
    font-style: italic;
    text-align: left;
    font-weight: bold;
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
    color:  ${t(_ => _.textColor)};
    &:before {
      content: '— ';
    }
  }
`;
