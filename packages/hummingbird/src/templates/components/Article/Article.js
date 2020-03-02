import React, { Component } from 'react';
import styled from 'styled-components';
import { defineMessages, injectIntl } from 'react-intl';
import classNames from 'classnames';
import Content from '../../../internal/Content';
import Entry from '../Entry';
import Chapters from './Chapters';
import ChapterMenu from './ChapterMenu';
import CornerMenu from './CornerMenu';
import ProgressBar from './ProgressBar';
import Header from './Header';

const ArticleWrapper = styled.article`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
  min-height: 100vh;
  position: relative;
`;

const messages = defineMessages({
  chaptersTitle: {
    id: 'hummingbird.Article.chapters.title',
    description: 'Title for list of chapters',
    defaultMessage: 'Chapters',
  },
  skipToContent: {
    id: 'hummingbird.Article.skipToContent.tooltip',
    description: 'Tooltip for landing section link to TOC',
    defaultMessage: 'view the content',
  },
});

export default class ArticleTemplate extends Component {
  static ProgressBar = ProgressBar;

  static Header = injectIntl(({ pageContext: { node, ...props }, intl }) => (
    <Header
      article={node}
      skipToContentTooltip={intl.formatMessage(messages.skipToContent)}
      {...props}
    />
  ));

  static Navigation = ({ pageContext: _props, chapters }) => {
    const {
      node: { translations, platforms, menu, locale },
      shareUrls,
      ...props
    } = _props;
    return (
      <Entry.Navigation
        chapters={chapters}
        shareUrls={shareUrls}
        shareMessage={platforms && platforms.all && platforms.all.description}
        items={menu && menu.items}
        translations={translations}
        locale={locale}
        {...props}
      />
    );
  };

  static CornerMenu = ({
    pageContext: {
      node: { translations, locale },
    },
  }) => <CornerMenu locale={locale} translations={translations} />;

  static ChapterMenu = ({ chapters = [] }) => <ChapterMenu chapters={chapters} />;

  static Main = ({
    pageContext: {
      node: { content },
    },
    chapters = [],
    onChaptersChange,
    dropcap = true,
  }) => (
    <main>
      <ArticleWrapper className="article" id="article-start">
        <Chapters chapters={chapters} />
        <Content
          className={classNames({ 'drop-cap': dropcap })}
          content={content}
          onLoad={({ chapters: c }) => onChaptersChange(c)}
        />
      </ArticleWrapper>
    </main>
  );

  static defaultProps = {
    children: [
      <ArticleTemplate.ProgressBar />,
      <ArticleTemplate.Navigation />,
      <ArticleTemplate.ChapterMenu />,
      <ArticleTemplate.CornerMenu />,
      <ArticleTemplate.Header />,
      <ArticleTemplate.Main />,
    ],
  };

  state = { chapters: [] };

  childProps = () => ({
    chapters: this.state.chapters,
    onChaptersChange: chapters => this.setState({ chapters }),
  });

  render() {
    return <Entry {...this.props} childProps={this.childProps()} />;
  }
}
