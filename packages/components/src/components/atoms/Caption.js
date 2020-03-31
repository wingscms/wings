/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../lib/styled';

const CaptionWrapper = styled.figcaption`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth};
  color: ${({ textColor }) => textColor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export default class Caption extends Component {
  static propTypes = {
    /** Border color, a CSS border-color value, e.g. '#fff' or 'transparent transparent transparent #ddd' */
    borderColor: PropTypes.string,
    /** Border style, a CSS border-style value, e.g. 'solid' or 'none none none dashed' */
    borderStyle: PropTypes.string,
    /** Border width, a CSS border-width value, e.g. '2px' or '1px 1rem 1em 0' */
    borderWidth: PropTypes.string,
    /** Background color, a CSS color value, e.g. '#fff' or 'rgba(255,255,255,1)' for white */
    backgroundColor: PropTypes.string,
    /** margins, e.g. '1rem 0' */
    margin: PropTypes.string,
    /** padding, e.g. '1rem 0' */
    padding: PropTypes.string,
    /** Text color, a CSS color value, e.g. '#000' or 'rgba(0,0,0,1)' for black */
    textColor: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: '0',
    margin: '0',
    padding: '.75rem 0 0 0',
    textColor: '#000',
  };

  render() {
    const { children, ...props } = this.props;
    return <CaptionWrapper {...props}>{children}</CaptionWrapper>;
  }
}
