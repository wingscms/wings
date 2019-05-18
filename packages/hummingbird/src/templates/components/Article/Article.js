import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Entry from '../Entry';
import _Content from '../../../components/Content';
import Chapters from './Chapters';

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
  static ProgressBar = Entry.ProgressBar;
  static CornerMenu = Entry.CornerMenu;
  static Navigation = Entry.Navigation;
  static Header = Entry.Header;
  static StackedHeader = Entry.StackedHeader;

  static Main = ({ node: { content }, headers, onHeadersChange }) => (
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

  render() {
    return <Entry {...this.props} />;
  }
}
