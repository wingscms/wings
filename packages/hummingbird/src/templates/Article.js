import React from 'react';
import Article from './components/Article';

export default props => (
  <Article {...props}>
    <Article.CornerMenu />
    <Article.Navigation />
    <Article.Header />
    <Article.Main />
  </Article>
);
