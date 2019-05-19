import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Entry from '../Entry';
import _Content from '../../../components/Content';
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
  > p:first-child {
    margin-top: 2em;
  }
`;

const Content = styled(_Content)`
  p:first-child {
    margin-top: 2em;
    @media screen and (min-width: 800px) {
      margin-top: 3em;
    }
  }
`;

export default class Article extends Component {
  static ProgressBar = ProgressBar;
  static Header = ({ pageContext: { node, ...props } }) => <Header article={node} {...props} />;

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
  static CornerMenu = ({
    pageContext: {
      node: { translations, locale },
      headers,
    },
  }) => <CornerMenu chapters={headers} locale={locale} translations={translations} />;

  static Main = ({
    pageContext: {
      node: { content },
    },
    headers = [],
    onHeadersChange,
  }) => (
    <main>
      <ArticleWrapper className={classNames('article')}>
        <div id="article-start">{headers.length ? <Chapters chapters={headers} /> : null}</div>
        <Content
          className="mobiledoc-content"
          id="entry-content"
          content={content}
          onLoad={({ headers: h }) => onHeadersChange(h)}
        />
      </ArticleWrapper>
    </main>
  );

  static defaultProps = {
    children: [
      <Article.ProgressBar />,
      <Article.Navigation />,
      <Article.CornerMenu />,
      <Article.Header />,
      <Article.Main />,
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
