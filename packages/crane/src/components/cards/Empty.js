import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const OuterContainer = styled.div`
  display: block;
  height: auto;
  cursor: pointer;
  border-radius: 4px;
`;

const StyledContainer = styled(Container)`
  transition: 0.2s all ease-in-out;
  position: relative;
  &.active,
  &:active,
  &:hover {
    box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.6)' : 'none')};
    .cardImage {
      &:after {
        opacity: 0.3;
      }
    }
  }
  &.medium {
    padding-top: ${({ maintainRatio }) => (maintainRatio ? '130%' : '0')};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export default class EmptyCard extends Component {
  static propTypes = {
    /** Border radius, pixels. Default = 4 */
    borderRadius: PropTypes.number,
    /** Maintain aspect ratio or have variable height */
    maintainRatio: PropTypes.bool,
    /** Toggles box-shadow */
    shadow: PropTypes.bool,
    /** Size of card. Medium/Large */
    size: PropTypes.string,
  };

  static defaultProps = {
    borderRadius: '4',
    maintainRatio: true,
    shadow: true,
    size: 'medium',
  };

  render() {
    const { borderRadius, maintainRatio, shadow, size, children } = this.props;
    return (
      <OuterContainer {...this.props}>
        <StyledContainer
          className={`${size || 'medium'}`}
          size={size}
          shadow={shadow}
          maintainRatio={maintainRatio}
          borderRadius={borderRadius}
        >
          <Content>{children}</Content>
        </StyledContainer>
      </OuterContainer>
    );
  }
}
