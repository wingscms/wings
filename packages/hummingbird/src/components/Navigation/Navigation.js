/* global document */

import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Burger, LanguagePicker, ShareButtons, SlideMenu, toggleSlideMenu } from '@wingscms/crane';
import { Link, navigate } from 'gatsby';

import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import whatsappIcon from '../../img/whatsapp.svg';
import emailIcon from '../../img/email.svg';
import languageIcon from '../../img/language.svg';

import MenuItem from './MenuItem';
import ChapterLinks from './ChapterLinks';
import ChaptersToggle from './ChaptersToggle';

import Logo from './Logo';

const Wrap = styled.div`
  background: ${({ theme }) => theme.navigationColor};
  width: 100%;
  display: block;
  text-align: center;
  height: 80px;
  z-index: 10;
  position: relative;
  margin-top: 4px;
  @media screen and (max-width: 800px) {
    height: 60px;
  }
  a {
    text-decoration: none;
    background-image: none;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1160px;
`;

const MenuButton = styled.div`
  position: absolute;
  right: ${({ active }) => (active ? '-300px' : '0')};
  top: 5px;
  z-index: 3000;
  @media screen and (max-width: 1250px) {
    position: relative;
    display: inline-block;
    float: right;
  }
  @media screen and (max-width: 800px) {
    top: 0;
    right: ${({ active }) => (active ? '-100vw' : '0')};
  }
`;

const ChapterClose = styled(MenuButton)`
  @media screen and (max-width: 1250px) {
    position: absolute;
    display: block;
  }
`;

const LanguagePickerWrap = styled.div`
  float: right;
  margin: 30px 10px 0 0;
  width: 120px;
  height: 50px;
  z-index: 5;
  position: relative;
  border-bottom: 3px solid #eee;
  transform: translateY(-50%);
  font-size: 14px;
  > div {
    > div {
      &.translations {
        > div {
          color: #000 !important;
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    font-size: 18px;
    margin-top: 40px;
    width: 250px;
  }
`;

const LanguageIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 6;
  @media screen and (min-width: 800px) {
    width: 20px;
    height: 20px;
    left: 15px;
  }
`;

const StyledShareButtons = styled(ShareButtons)`
  img {
    background-color: ${({ theme }) => theme.navigationColor};
    &:hover {
      background-color: ${({ theme }) => theme.languagePickerHoverColor};
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    e.preventDefault();
    toggleSlideMenu(this.state.visible);
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const {
      chapterMenu,
      chapters,
      items,
      translations = [],
      locale,
      hideMenu,
      shareUrls,
      theme,
      children,
    } = this.props;
    const { visible } = this.state;
    return (
      <Wrap {...this.props}>
        <Container className={visible ? 'visible' : ''}>
          {chapterMenu && chapters ? (
            <SlideMenu
              customCompTop={() => (
                <div>
                  <ChapterClose
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSlideMenu(
                        document
                          .getElementById('content-wrapper')
                          .classList.contains('chaptersOpen'),
                        'content-wrapper',
                        'chaptersOpen',
                        false,
                      );
                    }}
                  >
                    <Burger active color="#000000" type="spin" />
                  </ChapterClose>
                  <ChapterLinks chapters={chapters} />
                </div>
              )}
              items={[]}
              menuItemComp={MenuItem}
              InternalLink={MenuItem}
              left
              className="chapters"
            />
          ) : null}
          {chapterMenu && chapters ? <ChaptersToggle locale={locale} /> : null}
          <Link to="/">
            <Logo />
          </Link>
          {children}
          {hideMenu ? null : (
            <MenuButton active={visible} onClick={this.toggleNav}>
              <Burger active={visible} color="#000000" type="spin" />
            </MenuButton>
          )}
          {translations.length > 0 ? (
            <LanguagePickerWrap>
              <LanguageIcon src={languageIcon} />
              <LanguagePicker
                backgroundColor={theme.languagePickerColor}
                backgroundColorHover={theme.languagePickerHoverColor}
                translations={translations.map(x => ({ ...x, locale: x._locale }))}
                current={locale}
                onClickHandler={(e, trans) => {
                  e.preventDefault();
                  navigate(trans.path);
                }}
              />
            </LanguagePickerWrap>
          ) : null}
          {shareUrls ? (
            <StyledShareButtons
              email={shareUrls.email}
              emailIcon={emailIcon}
              facebook={shareUrls.facebook}
              facebookIcon={facebookIcon}
              twitter={shareUrls.twitter}
              twitterIcon={twitterIcon}
              whatsapp={shareUrls.whatsapp}
              whatsappIcon={whatsappIcon}
            />
          ) : null}
          {items ? <SlideMenu items={items} menuItemComp={MenuItem} InternalLink={Link} /> : null}
        </Container>
      </Wrap>
    );
  }
}

export default withTheme(Navigation);
