import React from 'react';
import { Article } from '@wingscms/hummingbird';

export default props => (
  <Article {...props}>
    <Article.CornerMenu />
    <Article.Header />
    <Article.Main />
  </Article>
);
