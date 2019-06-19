import React, { Component } from 'react';
import styled from 'styled-components';

const ProgressBarRoot = styled.div`
  position: fixed;
  display: block;
  height: 5px;
  width: 100vw;
  background-color: #f8f8f8;
  top: 0;
  left: 0;
  z-index: 20;
  .inner {
    height: 100%;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: width 0.1s ease-out;
  }
`;

export default class ProgressBar extends Component {
  state = {
    percentage: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.updatePercentage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updatePercentage);
  }

  updatePercentage = () =>
    requestAnimationFrame(() => {
      const { scrollY, innerHeight, document } = window;
      const percentage = (100 / (document.body.clientHeight - innerHeight)) * scrollY;
      this.setState({ percentage });
    });

  render() {
    return (
      <ProgressBarRoot>
        <div className="inner" style={{ width: `${this.state.percentage}%` }} />
      </ProgressBarRoot>
    );
  }
}
