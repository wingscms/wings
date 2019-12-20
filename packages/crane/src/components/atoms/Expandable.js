/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExpandableWrapper = styled.div`
  background-color: ${({ backgroundColor }) => `rgb(${backgroundColor})`};
  border-radius: ${({ borderRadius }) => `${borderRadius || 4}px`};
  box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.05)' : 'none')};
  padding: 30px;
  margin: 40px 0;
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  > * {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  ${props => {
    if (props.expandable) {
      if (!props.open) {
        return `
          height: ${props.height || '250px'};
          overflow: hidden;
          padding-bottom: 50px;
        `;
      }
      return `
        height: auto;
        overflow: hidden;
        padding-bottom: 50px;
      `;
    }
    return '';
  }};
`;

const Toggle = styled.div`
  background-color: ${({ backgroundColor }) => `rgb(${backgroundColor})`};
  color: ${({ toggleColor }) => toggleColor};
  font-weight: bold;
  font-family: ${({ toggleFontFamily }) => toggleFontFamily};
  line-height: 50px;
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ toggleHoverColor }) => toggleHoverColor};
  }
  ${({ open, backgroundColor }) =>
    (!open
      ? `&:after {
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(${backgroundColor}, 0) 0, rgba(${backgroundColor}, 100) 100%);
    top: -50px;
    height: 50px;
    width: 100%;
    content: '';
  }`
      : null)};
`;

export default class Expandable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.boundToggleHeight = this.toggleHeight.bind(this);
  }

  static propTypes = {
    /** Background color, must be an rgb value, e.g. '255, 255, 255' for white */
    backgroundColor: PropTypes.string,
    /** Border radius, pixels. Default = 4 */
    borderRadius: PropTypes.string,
    /** Text for the close button */
    closeText: PropTypes.string,
    /** Determines whether that block can be expanded */
    expandable: PropTypes.bool,
    /** The height of the unexpanded block */
    height: PropTypes.string,
    /** Text for the open button */
    openText: PropTypes.string,
    /** Toggles background shadow for the card. */
    shadow: PropTypes.bool,
    /** Open/close text color */
    toggleColor: PropTypes.string,
    /** Open/close text hover color */
    toggleHoverColor: PropTypes.string,
    /** Open/close text font family */
    toggleFontFamily: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: '255, 255, 255',
    borderRadius: '4',
    closeText: 'Less',
    expandable: true,
    height: '250px',
    openText: 'More',
    shadow: true,
    toggleColor: '#000000',
    toggleHoverColor: '#4856C9',
    toggleFontFamily: 'initial',
  };

  toggleHeight() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      backgroundColor,
      borderRadius,
      children,
      closeText,
      expandable,
      height,
      openText,
      shadow,
      toggleColor,
      toggleHoverColor,
      toggleFontFamily,
    } = this.props;
    const { open } = this.state;
    return (
      <ExpandableWrapper
        expandable={expandable}
        open={open}
        height={height}
        backgroundColor={backgroundColor}
        shadow={shadow}
        borderRadius={borderRadius}
      >
        {children}
        {expandable ? (
          <Toggle
            backgroundColor={backgroundColor}
            onClick={this.boundToggleHeight}
            open={open}
            toggleColor={toggleColor}
            toggleHoverColor={toggleHoverColor}
            toggleFontFamily={toggleFontFamily}
          >
            {open ? closeText : openText}
          </Toggle>
        ) : null}
      </ExpandableWrapper>
    );
  }
}
