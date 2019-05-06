import React from 'react';
import { ArticleDefault } from '@wingscms/hummingbird';

export default props => (
  <ArticleDefault {...props}>
    <ArticleDefault.CornerMenu />
    <ArticleDefault.Navigation />
    <ArticleDefault.Header />
    <ArticleDefault.Main />
  </ArticleDefault>
);
