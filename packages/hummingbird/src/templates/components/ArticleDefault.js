import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';
import Layout from '../../components/Layout';
import _Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Chapters from '../../components/Chapters';
import ProgressBar from '../../components/ProgressBar';
import Intro from '../../components/Text/Intro';
import CornerMenu from '../../components/CornerMenu';

import { authorIconBlack, calendarIconBlack } from '../../img/icons';
import { makeShareUrls, parseBool } from '../../../lib/utils';

const ContentComp = styled(_Content)``;

const Article = styled.article`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
  min-height: 100vh;
  position: relative;
  > p:first-child {
    margin-top: 2em;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: -5px 10px 0 0;
  position: absolute;
  left: 0;
  transition: all 0.2s ease-in-out;
`;

const InfoWrapper = styled.div`
  text-align: center;
`;

const InfoSpan = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  user-select: none;
  margin-top: 5px;
  padding-right: 10px;
`;

const Info = styled.div`
  display: inline-block;
  user-select: none;
  position: relative;
  padding: 0 0 0 40px;
  height: 40px;
  font-size: 12px;
  margin-right: 10px;
  min-width: 160px;
  text-align: left;
`;

const DateSpan = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  user-select: none;
  margin-top: 5px;
  &:after {
    text-shadow: none;
    position: absolute;
    top: 3px;
    left: -35px;
    content: '${({ day }) => day || 8}';
    height: 20px;
    width: 20px;
    text-align: center;
    color: #000000;
    font-size: 10px;
    display: block;
  }
`;

const StyledMenuContentWrapper = styled(MenuContentWrapper)`
  .slide-menu.chapters {
    position: fixed;
    z-index: 50;
  }
  &.chaptersOpen {
    .slide-menu.chapters {
      position: fixed;
      margin-left: 300px;
      top: 0;
      height: 100vh;
    }
  }
  @media screen and (max-width: 800px) {
    .slide-menu.chapters {
      left: -100vw;
    }
    &.chaptersOpen {
      margin-left: 100vw;
      padding-right: 100vw;
      width: calc(100% + 100vw);
      .slide-menu.chapters {
        margin-left: 100vw;
      }
    }
  }
`;

const formatMinutes = m => (m < 10 ? `0${m}` : m);

export default class ArticleDefault extends Component {
  constructor({ wrapContent = c => c, wrapMain = c => c, pageContext: { entry }, location }) {
    super();
    this.state = {
      headers: [],
      shareUrls: makeShareUrls(entry.platforms, location.href || '', entry.meta),
    };

    this.components = {
      Content: wrapContent(ContentComp),
      Main: wrapMain('main'),
    };
  }

  render() {
    const {
      pageContext: {
        entry,
        entry: {
          translations,
          platforms,
          meta,
          meta: { chapterMenu, hideMenu, intro, pubDate, author, dropCap },
        },
      },
    } = this.props;
    const { Content, Main } = this.components;

    const { headers, shareUrls } = this.state;
    const publish = new Date(pubDate);

    const translationPaths = Object.keys(translations || {}).map(_locale => ({
      _locale,
      path: entry.translations[_locale].path,
    }));
    return (
      <Layout>
        <StyledMenuContentWrapper id="content-wrapper" className="article">
          {entry.type.id === 'article' && <ProgressBar />}
          <CornerMenu
            chapterMenu={chapterMenu}
            chapters={headers}
            shareMessage={meta.shareMessage}
            locale={entry.locale}
            translations={translationPaths}
          />
          <Navigation
            chapters={headers}
            chapterMenu={chapterMenu && chapterMenu === 'slide'}
            shareUrls={shareUrls}
            shareMessage={
              meta.shareMessage || (platforms && platforms.all && platforms.all.description)
            }
            title={`${({ theme }) => theme.siteTitle} - ${entry.title}`}
            items={entry.menu && entry.menu.items}
            translations={translationPaths}
            locale={entry.locale}
            hideMenu={hideMenu}
          />
          <Header article={entry} />
          <Main>
            <Article
              className={`article${
                typeof dropCap === 'undefined' || parseBool(dropCap) ? ' drop-cap' : ''
              }`}
            >
              <div id="article-start">
                {intro ? (
                  <Intro>
                    <p>{intro}</p>
                    <InfoWrapper>
                      {author ? (
                        <Info>
                          <Icon src={authorIconBlack} />
                          <InfoSpan>{author}</InfoSpan>
                        </Info>
                      ) : null}
                      {pubDate ? (
                        <Info>
                          <Icon src={calendarIconBlack} />
                          <DateSpan day={publish.getDate()}>
                            {formatMinutes(publish.getDate())}-
                            {formatMinutes(publish.getMonth() + 1)}-{publish.getFullYear()}
                          </DateSpan>
                        </Info>
                      ) : null}
                    </InfoWrapper>
                  </Intro>
                ) : null}
                {(!chapterMenu || chapterMenu !== 'slide') && headers.length ? (
                  <Chapters chapters={headers} />
                ) : null}
              </div>
              <Content
                className="article-body"
                id="article-body"
                content={entry.content}
                onLoad={({ headers: h }) => this.setState({ headers: h })}
              />
            </Article>
          </Main>
          <Footer />
        </StyledMenuContentWrapper>
      </Layout>
    );
  }
}
