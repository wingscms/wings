import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, mapProps } from 'recompose';
import { Content } from '@wingsplatform/gatsby-plugin';

export default compose(
  mapProps(({ pathContext: { article } }) => ({ article })),
  setPropTypes({
    article: PropTypes.object.isRequired,
  }),
)(({
  article,
}) => (
  <div>
    <pre>{JSON.stringify(article, null, 2)}</pre>
    <Content content={article.content} />
  </div>
));
