import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOl = styled.ol`
  counter-reset: crane-list-counter;
  list-style-type: none;
  margin: ${({ margin }) => margin || 'initial'};
  padding: ${({ padding }) => padding || 'initial'};
  > li {
    counter-increment: crane-list-counter;
    margin: ${({ itemMargin }) => itemMargin || 'initial'};
    padding: ${({ itemPadding }) => itemPadding || 'initial'};
    position: relative;
    &:before {
      content: counter(crane-list-counter) '.';
      position: absolute;
      display: block;
      width: ${({ bulletSize }) => bulletSize}px;
      height: ${({ bulletSize }) => bulletSize}px;
      font-size: ${({ bulletSize }) => bulletSize}px;
      font-weight: ${({ bulletFontWeight }) => bulletFontWeight};
      font-family: ${({ bulletFontFamily }) => bulletFontFamily};
      text-align: center;
      line-height: ${({ bulletSize }) => bulletSize}px;
      color: ${({ bulletColor }) => bulletColor};
      top: ${({ bulletTop }) => bulletTop}px;
      left: ${({ bulletLeft }) => bulletLeft}px;
    }
  }
`;

export default class OrderedList extends Component {
  static propTyps = {
    /** Bullet color. */
    bulletColor: PropTypes.string,
    /** Bullet font-family */
    bulletFontFamily: PropTypes.string,
    /** Bullet font weight */
    bulletFontWeight: PropTypes.string,
    /** Bullet left positioning */
    bulletLeft: PropTypes.number,
    /** Bullet size for item elements, pixels. */
    bulletSize: PropTypes.number,
    /** Bullet top positioning. */
    bulletTop: PropTypes.number,
    /** Margin for child item elements. */
    itemMargin: PropTypes.string,
    /** Padding for child item elements. */
    itemPadding: PropTypes.string,
    /** List type for a 'standard' list (without custom bullet image). */
    type: PropTypes.string,
    /** Margin for list element. */
    margin: PropTypes.string,
    /** Padding for list element. */
    padding: PropTypes.string,
  };

  static defaultProps = {
    bulletColor: '#000000',
    bulletFontFamily: 'inherit',
    bulletFontWeight: 'bold',
    bulletLeft: 0,
    bulletSize: 16,
    bulletTop: 3,
    itemMargin: 'initial',
    itemPadding: '0 0 0 30px',
    type: 'disc',
    margin: 'initial',
    padding: 'initial',
  };

  render() {
    const { children } = this.props;
    return <StyledOl {...this.props}>{children}</StyledOl>;
  }
}
