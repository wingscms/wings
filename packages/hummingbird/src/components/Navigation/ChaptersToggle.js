import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { toggleSlideMenu } from '@wingscms/crane';

const ChaptersToggleContainer = styled.div`
  position: fixed;
  width: 50px;
  background-color: ${({ theme }) => theme.primaryColor};
  left: 0;
  margin-left: 0;
  top: 0;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  font-family: ${({ theme }) => theme.headerFontFamily};
  &:after {
    content: '${({ title }) => title || 'Chapters'}';
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    left: 50%;
    color: #000;
    font-weight: bold;
    transition: 0.2s all ease-in-out;
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  .chaptersOpen & {
    margin-left: 300px;
  }
  &.hidden {
    display: none;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default class ChaptersToggle extends React.Component {
  state = {
    hidden: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { hidden } = this.state;
    if (window.scrollY > 200 && hidden) {
      this.setState({ hidden: false });
    }
    if (window.scrollY < 200 && !hidden) {
      this.setState({ hidden: true });
    }
  };

  render() {
    const { title } = this.props;
    const { hidden } = this.state;
    return (
      <ChaptersToggleContainer
        title={title}
        className={classNames({ hidden })}
        onClick={e => {
          e.preventDefault();
          toggleSlideMenu(
            document.getElementById('content-wrapper').classList.contains('chaptersOpen'),
            'content-wrapper',
            'chaptersOpen',
            false,
          );
        }}
      />
    );
  }
}
