import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  margin: ${({ margin }) => margin || 'initial'};
  padding: ${({ padding }) => padding || 'initial'};
  > li {
    margin: ${({ itemMargin }) => itemMargin || 'initial'};
    padding: ${({ itemPadding }) => itemPadding || 'initial'};
    position: relative;
    ${({
    bulletCharacter,
    bulletColor,
    bulletImage,
    bulletColorInner,
    bulletLeft,
    bulletSize,
    bulletTop,
    type,
  }) => {
    switch (type) {
      case 'chevron':
        return `
          &::before {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            border-top: ${bulletSize}px solid transparent;
            border-bottom: ${bulletSize}px solid transparent;
            border-left: ${bulletSize}px solid ${bulletColor};
          }
          &::after {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop + 4}px;
            left: ${bulletLeft}px;
            content: '';
            border-top: ${bulletSize - 4}px solid transparent;
            border-bottom: ${bulletSize - 4}px solid transparent;
            border-left: ${bulletSize - 4}px solid ${bulletColorInner};
          }
        `;
      case 'diamond':
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            display: block;
            transform: rotate(45deg);
          }
        `;
      case 'diamondHollow':
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            transform: rotate(45deg);
          }
          &::after {
            width: ${bulletSize - 4}px;
            height: ${bulletSize - 4}px;
            background-color: ${bulletColorInner};
            position: absolute;
            top: ${bulletTop + 2}px;
            left: ${bulletLeft + 2}px;
            content: '';
            transform: rotate(45deg);
          }
        `;
      case 'discHollow':
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            border-radius: 100%;
            left: ${bulletLeft}px;
            content: '';
          }
          &::after {
            width: ${bulletSize - 4}px;
            height: ${bulletSize - 4}px;
            background-color: ${bulletColorInner};
            position: absolute;
            top: ${bulletTop + 2}px;
            border-radius: 100%;
            left: ${bulletLeft + 2}px;
            content: '';
          }
        `;
      case 'image':
        return `
          &::before {
            width: ${bulletSize}px;;
            height: ${bulletSize}px;;
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            background-image: url(${bulletImage});
            background-size: 100% auto;
            background-repeat: no-repeat;
          }
        `;
      case 'square':
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
          }
        `;
      case 'squareHollow':
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
          }
          &::after {
            width: ${bulletSize - 4}px;
            height: ${bulletSize - 4}px;
            background-color: ${bulletColorInner};
            position: absolute;
            top: ${bulletTop + 2}px;
            left: ${bulletLeft + 2}px;
            content: '';
          }
        `;
      case 'triangle':
        return `
          &::before {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            border-top: ${bulletSize}px solid transparent;
            border-bottom: ${bulletSize}px solid transparent;
            border-left: ${bulletSize}px solid ${bulletColor};
          }
        `;
      case 'triangleHollow':
        return `
          &::before {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '';
            border-top: ${bulletSize}px solid transparent;
            border-bottom: ${bulletSize}px solid transparent;
            border-left: ${bulletSize}px solid ${bulletColor};
          }
          &::after {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop + 4}px;
            left: ${bulletLeft + 2}px;
            content: '';
            border-top: ${bulletSize - 4}px solid transparent;
            border-bottom: ${bulletSize - 4}px solid transparent;
            border-left: ${bulletSize - 4}px solid ${bulletColorInner};
          }
        `;
      case 'unicode':
        return `
          &::before {
            width: 0;
            height: 0;
            position: absolute;
            top: ${bulletTop}px;
            left: ${bulletLeft}px;
            content: '${bulletCharacter}';
            color: ${bulletColor};
          }
        `;
      case 'disc':
      default:
        return `
          &::before {
            width: ${bulletSize}px;
            height: ${bulletSize}px;
            background-color: ${bulletColor};
            position: absolute;
            top: ${bulletTop}px;
            border-radius: 100%;
            left: ${bulletLeft}px;
            content: '';
          }
        `;
    }
  }};
  }
  `;

export default class UnorderedList extends Component {
  static propTyps = {
    /** Unicode character to use for 'unicode' list type */
    bulletCharacter: PropTypes.string,
    /** Bullet color. */
    bulletColor: PropTypes.string,
    /** Bullet inner color - only for certain types. */
    bulletColorInner: PropTypes.string,
    /** Image for 'image' bullet type. */
    bulletImage: PropTypes.string,
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
    bulletCharacter: '\u2713',
    bulletColor: '#000000',
    bulletColorInner: '#ffffff',
    bulletImage: '',
    bulletLeft: 0,
    bulletSize: 8,
    bulletTop: 5,
    itemMargin: 'initial',
    itemPadding: '0 0 0 30px',
    type: 'disc',
    margin: 'initial',
    padding: 'initial',
  };

  render() {
    const { children } = this.props;
    return <StyledUl {...this.props}>{children}</StyledUl>;
  }
}
