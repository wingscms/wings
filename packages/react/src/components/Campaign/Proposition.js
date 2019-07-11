import React, { Component } from 'react';
import styled from 'styled-components';

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
  box-shadow: ${({ theme }) => theme.defaultShadow};
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
    updateHeight(this);
  }

  toggleProposition = () => this.setState(({ show }) => ({ show: !show }));

  render() {
    const { height, show } = this.state;
    const {
      children,
      copy: { descriptionCollapse, descriptionExpand },
    } = this.props;
    return (
      <PropositionContainer height={height} show={show}>
        {children}
        <ToggleButton onClick={this.toggleProposition}>
          {show ? (
            <React.Fragment>{descriptionCollapse}</React.Fragment>
          ) : (
            <React.Fragment>{descriptionExpand}</React.Fragment>
          )}
        </ToggleButton>
      </PropositionContainer>
    );
  }
}
