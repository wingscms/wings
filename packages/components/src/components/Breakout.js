import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../lib/styled';
import Expandable from './Expandable';

const Title = styled.h4`
  color: ${({ theme }) => theme.headingColor};
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1;
  font-size: 24px;
  @media screen and (min-width: 800px) {
    margin-bottom: 20px;
    font-size: 32px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
  text-align: left;
`;

export default class Breakout extends Component {
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
    /** Text content */
    text: PropTypes.string.isRequired,
    /** Title content */
    title: PropTypes.string,
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
    title: '',
    toggleColor: '#000000',
    toggleHoverColor: '#4856C9',
    toggleFontFamily: 'initial',
  };

  toggleHeight() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      text,
      title,
      closeText,
      openText,
      expandable,
      height,
      toggleColor,
      toggleHoverColor,
      toggleFontFamily,
      borderRadius,
      backgroundColor,
      shadow,
    } = this.props;
    const { open } = this.state;
    return (
      <Expandable
        expandable={expandable}
        open={open}
        height={height}
        toggleColor={toggleColor}
        toggleHoverColor={toggleHoverColor}
        toggleFontFamily={toggleFontFamily}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        shadow={shadow}
        closeText={closeText}
        openText={openText}
      >
        {title ? <Title>{title}</Title> : null}
        <Text>{text}</Text>
      </Expandable>
    );
  }
}
