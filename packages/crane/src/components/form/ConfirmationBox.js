import React, { Component } from 'react';
import styled from 'styled-components';

const ConfirmationBox = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  top: 20px;
  left: 50%;
  text-align: center;
  z-index: 100;
  transform: translateX(-50%);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  opacity: 1;
  h3 {
    font-size: 22px;
    font-weight: 800;
  }
  p {
    font-size: 18px;
  }
  &.notification-shown {
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-delay: 6s;
    animation-iteration-count: 1;
    animation-direction: forwards;
  }
  &.notification-hidden {
    display: none;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      top: -10px;
    }
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 13px;
  top: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

class Confirmation extends Component {
  constructor() {
    super();
    this.handleClickHideAlert = this.handleClickHideAlert;
  }

  state = {
    isShowing: true,
  };

  componentDidMount() {
    this.handleClickShowAlert();
  }

  handleClickShowAlert() {
    this.setState({
      isShowing: true,
    });

    setTimeout(() => {
      this.setState({
        isShowing: false,
      });
    }, 7000);
  }

  handleClickHideAlert() {
    this.setState({
      isShowing: false,
    });
  }

  render() {
    // const { article } = this.props;
    const { isShowing } = this.state;
    const { confirmationText, confirmationTitle } = this.props;
    return (
      <div>
        <ConfirmationBox
          className={`notification ${isShowing ? 'notification-shown' : 'notification-hidden'}`}
        >
          <h3>{confirmationTitle || 'Bedankt!'}</h3>
          <p>
            {confirmationText ||
              'Je e-mailadres is bevestigd. We houden je via e-mail verder op de hoogte, dus houd je inbox in de gaten!'}
          </p>
          <CloseIcon onClick={() => this.handleClickHideAlert()} />
        </ConfirmationBox>
      </div>
    );
  }
}
export default Confirmation;
