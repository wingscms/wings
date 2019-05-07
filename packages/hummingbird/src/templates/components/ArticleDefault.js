import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { MenuContentWrapper } from '@wingscms/crane';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Chapters from '../../components/Chapters';
import ProgressBar from '../../components/ProgressBar';
import Intro from '../../components/Text/Intro';
import CornerMenu from '../../components/CornerMenu';

import { authorIconBlack, calendarIconBlack } from '../../img/icons';
import { makeShareUrls, parseBool } from '../../../lib/utils';

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
  static Navigation = ({
    entry: {
      translations,
      platforms,
      menu,
      locale,
      meta: { shareMessage, chapterMenu, hideMenu },
    },
    headers,
    shareUrls,
  }) => (
    <Navigation
      chapters={headers}
      chapterMenu={chapterMenu && chapterMenu === 'slide'}
      shareUrls={shareUrls}
      shareMessage={shareMessage || (platforms && platforms.all && platforms.all.description)}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
      hideMenu={hideMenu}
    />
  );

  static CornerMenu = ({
    entry: {
      meta: { chapterMenu, shareMessage },
      translations,
      locale,
    },
    headers,
  }) => (
    <CornerMenu
      chapterMenu={chapterMenu}
      chapters={headers}
      shareMessage={shareMessage}
      locale={locale}
      translations={translations}
    />
  );

  static Header = ({ entry }) => <Header article={entry} />;
  static Main = ({
    entry: {
      meta: { chapterMenu, intro, pubDate, author, dropCap },
      content,
    },
    headers,
    onHeadersChange,
  }) => {
    const publish = new Date(pubDate);
    return (
      <main>
        <Article
          className={classNames('article', {
            'drop-cap': typeof dropCap === 'undefined' || parseBool(dropCap),
          })}
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
                        {formatMinutes(publish.getDate())}-{formatMinutes(publish.getMonth() + 1)}-
                        {publish.getFullYear()}
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
            content={content}
            onLoad={({ headers: h }) => onHeadersChange(h)}
          />
        </Article>
      </main>
    );
  };

  static defaultProps = {
    children: [
      <ArticleDefault.CornerMenu />,
      <ArticleDefault.Navigation />,
      <ArticleDefault.Header />,
      <ArticleDefault.Main />,
    ],
  };

  constructor(props) {
    super(props);
    const {
      pageContext: { entry },
      location,
    } = props;
    this.state = {
      headers: [],
      shareUrls: makeShareUrls(entry.platforms, location.href || '', entry.meta),
    };
  }
  children = () => {
    const {
      pageContext: {
        entry,
        entry: { translations: _translations },
      },
      children,
    } = this.props;
    const { headers, shareUrls } = this.state;
    const translations = Object.keys(_translations || {}).map(_locale => ({
      _locale,
      path: _translations[_locale].path,
    }));

    const childProps = {
      entry: { ...entry, translations },
      headers,
      shareUrls,
      onHeadersChange: h => this.setState({ headers: h }),
    };

    return React.Children.map(children, element => React.cloneElement(element, childProps));
  };

  render() {
    const {
      pageContext: {
        entry: { type },
      },
    } = this.props;
    return (
      <Layout>
        <div id={this.props.id}>
          <StyledMenuContentWrapper id="content-wrapper" className="article">
            {type.id === 'article' && <ProgressBar />}
            {this.children()}
            <Footer />
          </StyledMenuContentWrapper>
        </div>
      </Layout>
    );
  }
}
