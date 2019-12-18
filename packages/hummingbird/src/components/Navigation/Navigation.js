import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import {
  Burger,
  LanguagePicker,
  ShareButtons,
  SlideMenu,
  toggleSlideMenu,
  getContrastColor,
  useTheme,
} from '@wingscms/crane';
import { Link, navigate } from 'gatsby';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import routing from '../../../services/routing';

import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import whatsappIcon from '../../img/whatsapp.svg';
import emailIcon from '../../img/email.svg';

import MenuItem from './MenuItem';
import ChapterLinks from './ChapterLinks';
import ChaptersToggle from './ChaptersToggle';

import Logo from './Logo';

const _MenuItem = props => {
  const theme = useTheme();
  return <MenuItem backgroundColor={theme.navigationBackgroundColor} {...props} />;
};

const Wrap = styled.div`
  background: ${({ theme }) => theme.navigationBackgroundColor};
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
  top: 8px;
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
  margin: 30px 10px -30px 0;
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
    margin-bottom: -40px;
  }
`;

export default function Navigation({
  chapterMenu,
  chapters,
  items,
  translations = [],
  locale,
  hideMenu,
  shareUrls,
  children,
  ...props
}) {
  const intl = useIntl();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const toggleNav = e => {
    e.preventDefault();
    toggleSlideMenu(visible);
    setVisible(!visible);
  };

  return (
    <Wrap {...filterInvalidDOMProps(props)}>
      <Container className={visible ? 'visible' : ''}>
        {chapterMenu && chapters ? (
          <SlideMenu
            customCompTop={() => (
              <div>
                <ChapterClose
                  onClick={e => {
                    e.preventDefault();
                    toggleSlideMenu(
                      document.getElementById('content-wrapper').classList.contains('chaptersOpen'),
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
            menuItemComp={_MenuItem}
            InternalLink={_MenuItem}
            left
            className="chapters"
          />
        ) : null}
        {chapterMenu && chapters ? (
          <ChaptersToggle
            title={intl.formatMessage({
              id: 'hummingbird.Navigation.chapterMenu.title',
              description: 'Title for chapter menu',
              defaultMessage: 'Chapters',
            })}
          />
        ) : null}
        <Link to="/">
          <Logo />
        </Link>
        {children}
        {hideMenu || !items || !items.length ? null : (
          <MenuButton active={visible} onClick={toggleNav}>
            <Burger
              active={visible}
              activeColor={getContrastColor({
                backgroundColor: theme.navigationMenuBackgroundColor,
                colors: { light: theme.navigationIconColor, dark: theme.navigationIconColorDark },
                threshold: theme.contrastLuminanceThreshold,
              })}
              color={theme.navigationIconColor}
              type="spin"
            />
          </MenuButton>
        )}
        {translations.length > 0 ? (
          <LanguagePickerWrap>
            <LanguagePicker
              translations={translations.map(t => ({
                name: t.locale.name,
                locale: t.locale.id,
                node: t,
              }))}
              current={{
                locale: locale.id,
                name: locale.name,
              }}
              onTranslationClick={({ node }) => {
                navigate(routing.getPath(node));
              }}
            />
          </LanguagePickerWrap>
        ) : null}
        {shareUrls ? (
          <ShareButtons
            color={theme.navigationIconColor}
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
        {items ? (
          <SlideMenu
            items={items}
            menuItemComp={_MenuItem}
            InternalLink={Link}
            backgroundColor={theme.navigationMenuBackgroundColor}
          />
        ) : null}
      </Container>
    </Wrap>
  );
}
