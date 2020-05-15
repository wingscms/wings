/* eslint-disable react/jsx-fragments */
import React from 'react';
import { compose, setPropTypes, setStatic } from 'recompose';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import styled from '../../../lib/styled';
import propTypes, { defaultProps } from './propTypes';
import Quote from './Quote';

const Caption = styled.figcaption`
  margin-top: -30px;
  margin-bottom: ${({ theme }) => theme.mediumSpacing};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 0.8em;
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
      background-image: linear-gradient(
        120deg,
        ${({ theme }) => theme.primaryColor} 0%,
        ${({ theme }) => theme.primaryColor} 100%
      );
    }
  }
`;

const Blockquote = Quote;

export default compose(
  setPropTypes(propTypes),
  setStatic('defaultProps', defaultProps),
)(({ text, source, sourceUrl, ...props }) => (
  <>
    <Blockquote {...filterInvalidDOMProps(props)}>
      <blockquote>{text}</blockquote>
    </Blockquote>
    {!source ? null : <Caption>{!sourceUrl ? source : <a href={sourceUrl}>{source}</a>}</Caption>}
  </>
));
