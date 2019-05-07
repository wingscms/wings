import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Entry } from '@wingscms/hummingbird';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Chapters from '../../components/Chapters';
import Intro from '../../components/Text/Intro';
import { authorIconBlack, calendarIconBlack } from '../../img/icons';
import { makeShareUrls, parseBool } from '../../../lib/utils';

const ArticleWrapper = styled.article`
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

const formatMinutes = m => (m < 10 ? `0${m}` : m);

export default class Article extends Entry {
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
        <ArticleWrapper
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
        </ArticleWrapper>
      </main>
    );
  };

  static defaultProps = {
    children: [
      <Article.ProgressBar />,
      <Article.CornerMenu />,
      <Article.Navigation />,
      <Article.FullWidthHeader />,
      <Article.Main />,
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
        loop,
        featured,
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
      loop,
      featured,
      onHeadersChange: h => this.setState({ headers: h }),
    };

    return React.Children.map(children, element => React.cloneElement(element, childProps));
  };

  render() {
    return (
      <Layout>
        <div id={this.props.id}>
          <Article.StyledMenuContentWrapper id="content-wrapper" className="article">
            {this.children()}
            <Footer />
          </Article.StyledMenuContentWrapper>
        </div>
      </Layout>
    );
  }
}
