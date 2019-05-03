/* global window */

import React, { Component } from 'react';
import styled from 'styled-components';

import arrowDown from '../../../img/arrowdown.png';
import arrowUp from '../../../img/arrowup.png';

const windowExists = typeof window !== 'undefined';

const Arrow = styled.img`
  height: 14px;
  margin-bottom: 0;
  margin-left: 10px;
`;

const PropositionContainer = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% - 460px);
  padding: 40px 40px 80px 40px;
  margin: 40px 0;
  overflow: hidden;
  background-color: #fff;
  vertical-align: top;
  border-radius: 4px 0 0 4px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  max-height: ${props => (!props.show && props.height ? `${props.height - 80}px` : 'none')};
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    margin: 10px 0;
    padding: 20px;
  }
`;

const ToggleButton = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  padding: 20px 0;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: bold;
  bottom: 0;
  left: 0;
  border-radius: 4px;
  z-index: 10;
  background-color: #fff;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    transform: translateY(-100%);
    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 50%);
  }
`;

export default class PetitionProposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      show: false,
    };
    this.togglePropositionBound = this.toggleProposition.bind(this);
  }

  componentDidMount() {
    if (windowExists) {
      const formContainer = window.document.getElementById('fb-form-container');
      this.setState({ height: formContainer.offsetHeight }); // eslint-disable-line
    }
  }

  toggleProposition() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { height, show } = this.state;
    const { children } = this.props;
    return (
      <PropositionContainer height={height} show={show}>
        {children}
        <ToggleButton onClick={this.togglePropositionBound}>
          {show ? (
            <React.Fragment>
              Collapse
              <Arrow src={arrowUp} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              Read more
              <Arrow src={arrowDown} />
            </React.Fragment>
          )}
        </ToggleButton>
      </PropositionContainer>
    );
  }
}
