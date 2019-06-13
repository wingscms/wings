import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

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
    color: ${({ theme }) => theme.colorPrimary};
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

function updateHeight(comp) {
  const campaignFormContainer = window.document.getElementById('campaign-form-container');
  const campaignForm = window.document.getElementById('campaign-form');
  if (campaignForm) {
    comp.setState({ height: campaignFormContainer.offsetHeight });
  } else {
    setTimeout(() => updateHeight(comp), 100);
  }
}

export default class Proposition extends Component {
  state = {
    height: '',
    show: false,
  };

  componentDidMount() {
    if (windowExists) {
      updateHeight(this);
    }
  }

  toggleProposition = () => this.setState(({ show }) => ({ show: !show }));

  render() {
    const { height, show } = this.state;
    const { children } = this.props;
    return (
      <PropositionContainer height={height} show={show}>
        {children}
        <ToggleButton onClick={this.toggleProposition}>
          {show ? (
            <React.Fragment>
              <FormattedMessage
                id="hummingbird.Campaign.description.collapse"
                description="Collapse proposition button text"
                defaultMessage="Collapse"
              />
              <Arrow src={arrowUp} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FormattedMessage
                id="hummingbird.Campaign.description.expand"
                description="Expand proposition button text"
                defaultMessage="Read more"
              />
              <Arrow src={arrowDown} />
            </React.Fragment>
          )}
        </ToggleButton>
      </PropositionContainer>
    );
  }
}
