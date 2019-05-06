import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { toggleSlideMenu, languageList } from '@wingscms/crane';

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
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  &:after {
    content: '${({ locale }) => (locale ? languageList[locale].chaptersName : 'Hoofdstukken')}';
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
    const { locale } = this.props;
    const { hidden } = this.state;
    return (
      <ChaptersToggleContainer
        locale={locale}
        className={classNames({ hidden })}
        onClick={(e) => {
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
