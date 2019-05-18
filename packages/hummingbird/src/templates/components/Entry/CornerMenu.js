/* global window */
import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
import { navigate } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import { languageList, LanguagePicker, toggleSlideMenu } from '@wingscms/crane';

import chaptersImage from '../../../img/chapters.svg';
import shareImage from '../../../img/share.svg';
import facebookImage from '../../../img/facebook.svg';
import twitterImage from '../../../img/twitter.svg';
import whatsappImage from '../../../img/whatsapp.svg';
import languageIcon from '../../../img/language.svg';

const Container = styled.div`
  position: fixed;
  display: block;
  bottom: 0;
  right: 0;
  height: 65px;
  z-index: 20;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  &.hidden {
    display: none;
  }
`;

const ChaptersLink = styled.a`
  background-color: ${({ theme }) => theme.languagePickerColor};
  height: 65px;
  width: ${({ slideMenu }) => (slideMenu ? '65px' : '270px')};
  display: inline;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  float: left;
  text-decoration: none;
  text-align: center;
  position: relative;
  transition: 0.15s linear all;
  cursor: pointer;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  &.divider {
    border-right: 2px solid #000;
  }
  span {
    line-height: 65px;
    vertical-align: middle;
    display: ${({ slideMenu }) => (slideMenu ? 'none' : 'initial')};
  }
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.languagePickerHoverColor};
  }
  @media screen and (max-width: 800px) {
    width: 65px;
    span {
      display: none;
    }
  }
`;

const ChapterImage = styled.img`
  vertical-align: ${({ slideMenu }) => (slideMenu ? 'initial' : 'middle')};
  margin: ${({ slideMenu }) => (slideMenu ? '25px 25px 0 20px' : '0 0 3px 20px')};
  @media screen and (max-width: 800px) {
    vertical-align: initial;
    margin-top: 25px;
    margin-right: 23px;
  }
`;

const ShareImage = styled.img`
  margin-bottom: 14px;
  margin-top: 20px;
  margin-left: 20px;
  &.facebook {
    margin-left: 25px;
  }
`;

const ShareLink = styled.a`
  width: 65px;
  height: 65px;
  background-color: ${({ theme }) => theme.appBackgroundColor};
  display: block;
  position: relative;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    &:last-of-type {
      &:after {
        border-color: ${({ theme }) => theme.primaryColor} transparent transparent transparent;
      }
    }
  }
  &:last-of-type {
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transition: all 0.15s linear;
      border-color: ${({ theme }) => theme.appBackgroundColor} transparent transparent transparent;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 10px;
      height: 0;
      width: 0;
      display: inline-block;
    }
  }
`;

const ShareOpen = styled.div`
  height: 65px;
  width: 65px;
  background-color: ${({ theme }) => theme.darkAppBackgroundColor};
  display: inline;
  float: right;
  position: relative;
  overflow: visible;
  transition: all 0.15s linear;
  cursor: pointer;
  .linkWrapper {
    width: 100%;
    background-color: transparent;
    display: none;
    cursor: default;
    padding-bottom: 30px;
    height: 225px;
  }
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.darkAppBackgroundColor};
    .linkWrapper {
      display: block;
    }
  }
`;

const ShareOpenInner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const LanguagePickerWrap = styled.div`
  display: inline-block;
  margin: 0;
  width: 250px;
  height: 65px;
  z-index: 5;
  position: relative;
  border-bottom: 3px solid #eee;
  > div {
    > div {
      &.translations {
        height: auto;
        > div {
          color: #000 !important;
        }
      }
      height: 65px;
    }
  }
`;

const LanguageIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 15px;
  top: 22px;
  z-index: 6;
`;

class CornerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      hidden: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      url: encodeURIComponent(`http://${window.location.hostname}${window.location.pathname}`),
    });
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
    const {
      chapterMenu,
      chapters = [],
      locale,
      shareMessage,
      translations = [],
      theme,
    } = this.props;
    const { hidden, url } = this.state;
    const windowExists = typeof window !== 'undefined';
    return (
      <Container className={hidden ? 'hidden' : ''}>
        {translations.length > 0 ? (
          <LanguagePickerWrap>
            <LanguageIcon src={languageIcon} />
            <LanguagePicker
              showAbove
              backgroundColor={theme.languagePickerColor}
              backgroundColorHover={theme.languagePickerHoverColor}
              translations={translations}
              current={locale}
              onClickHandler={(e, trans) => {
                e.preventDefault();
                navigate(trans.path);
              }}
            />
          </LanguagePickerWrap>
        ) : null}
        {chapters.length > 0 ? (
          windowExists && translations.length < 1 && (!chapterMenu || chapterMenu !== 'slide') ? (
            <Scroll type="id" element="chapter-list">
              <ChaptersLink>
                <span>{locale ? languageList[locale].chaptersName : 'Chapters'}</span>
                <ChapterImage src={chaptersImage} />
              </ChaptersLink>
            </Scroll>
          ) : (
            <ChaptersLink
              className={translations.length > 0 ? 'divider' : ''}
              slideMenu
              onClick={(e) => {
                e.preventDefault();
                toggleSlideMenu(
                  document.getElementById('content-wrapper').classList.contains('chaptersOpen'),
                  'content-wrapper',
                  'chaptersOpen',
                  false,
                );
              }}
            >
              <span>{locale ? languageList[locale].chaptersName : 'Chapters'}</span>
              <ChapterImage src={chaptersImage} slideMenu />
            </ChaptersLink>
          )
        ) : null}
        <ShareOpen>
          <ShareOpenInner>
            <div className="linkWrapper">
              <ShareLink
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
              >
                <ShareImage src={facebookImage} className="facebook" />
              </ShareLink>
              <ShareLink
                href={`https://twitter.com/intent/tweet?url=${url}${
                  shareMessage ? `&status=${encodeURIComponent(shareMessage)}%20${url}` : ''
                }`}
                target="_blank"
              >
                <ShareImage src={twitterImage} />
              </ShareLink>
              <ShareLink
                href={`whatsapp://send?text=${
                  shareMessage ? `${encodeURIComponent(shareMessage)}: ` : ''
                }${url}`}
                target="_blank"
              >
                <ShareImage src={whatsappImage} />
              </ShareLink>
            </div>
            <ShareImage src={shareImage} />
          </ShareOpenInner>
        </ShareOpen>
      </Container>
    );
  }
}

export default withTheme(CornerMenu);
