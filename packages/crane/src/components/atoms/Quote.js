/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuoteWrapper = styled.blockquote`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth};
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  b,
  strong {
    font-weight: bolder;
  }
  i,
  em {
    font-style: italic;
  }
`;

export default class Quote extends Component {
  static propTypes = {
    /** Border color, a CSS border-color value, e.g. '#fff' or 'transparent transparent transparent #ddd' */
    borderColor: PropTypes.string,
    /** Border style, a CSS border-style value, e.g. 'solid' or 'none none none dashed' */
    borderStyle: PropTypes.string,
    /** Border width, a CSS border-width value, e.g. '2px' or '1px 1rem 1em 0' */
    borderWidth: PropTypes.string,
    /** Background color, a CSS color value, e.g. '#fff' or 'rgba(255,255,255,1)' for white */
    backgroundColor: PropTypes.string,
    /** Font weight value, e.g. '700', 'bold', 'thinner' */
    fontWeight: PropTypes.string,
    /** Line height, a line-height value, e.g. '1.4' */
    lineHeight: PropTypes.string,
    /** margins, e.g. '1rem 0' */
    margin: PropTypes.string,
    /** padding, e.g. '1rem 0' */
    padding: PropTypes.string,
    /** Text-align value */
    textAlign: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'start',
      'end',
      'match-parent',
      'inherit',
      'initial',
      'unset',
    ]),
    /** Text color, a CSS color value, e.g. '#000' or 'rgba(0,0,0,1)' for black */
    textColor: PropTypes.string,
    /** Text size, a CSS font-size value, e.g. '12px' or '1.5rem' */
    textSize: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: '#fff',
    borderColor: 'transparent transparent transparent #ddd',
    borderStyle: 'none none none solid',
    borderWidth: '0 0 0 .5rem',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    margin: '0',
    padding: '0 0 0 1rem',
    textAlign: 'inherit',
    textColor: '#000',
    textSize: '1rem',
  };

  render() {
    const { children, ...props } = this.props;
    return <QuoteWrapper {...props}>{children}</QuoteWrapper>;
  }
}
