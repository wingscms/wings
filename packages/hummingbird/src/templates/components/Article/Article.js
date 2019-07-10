import React, { Component } from 'react';
import styled from 'styled-components';
import { defineMessages, injectIntl } from 'react-intl';
import classNames from 'classnames';
import Content from '../../../internal/Content';
import Entry from '../Entry';
import Chapters from './Chapters';
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

  static Navigation = ({ pageContext: _props }) => {
    const {
      node: { translations, platforms, menu, locale },
      headers,
      shareUrls,
      ...props
    } = _props;
    return (
      <Entry.Navigation
        chapters={headers}
        shareUrls={shareUrls}
        shareMessage={platforms && platforms.all && platforms.all.description}
        items={menu && menu.items}
        translations={translations}
        locale={locale}
        {...props}
      />
    );
  };

  static CornerMenu = injectIntl(
    ({
      pageContext: {
        node: { translations, locale },
        headers,
      },
      intl,
    }) => (
      <CornerMenu
        chapters={headers}
        locale={locale}
        translations={translations}
        chaptersTitle={intl.formatMessage(messages.chaptersTitle)}
      />
    ),
  );

  static Main = ({
    pageContext: {
      node: { content },
    },
    headers = [],
    onHeadersChange,
    dropcap = true,
  }) => (
    <main>
      <ArticleWrapper className={classNames('article')}>
        <div id="article-start">{headers.length ? <Chapters chapters={headers} /> : null}</div>
        <Content
          className={classNames('mobiledoc-content', { 'drop-cap': dropcap })}
          id="entry-content"
          content={content}
          onLoad={({ headers: h }) => onHeadersChange(h)}
        />
      </ArticleWrapper>
    </main>
  );

  static defaultProps = {
    children: [
      <ArticleTemplate.ProgressBar />,
      <ArticleTemplate.Navigation />,
      <ArticleTemplate.CornerMenu />,
      <ArticleTemplate.Header />,
      <ArticleTemplate.Main />,
    ],
  };

  state = { headers: [] };

  childProps = () => ({
    headers: this.state.headers,
    onHeadersChange: headers => this.setState({ headers }),
  });

  render() {
    return <Entry {...this.props} childProps={this.childProps()} />;
  }
}
