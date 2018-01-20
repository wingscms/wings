import React from 'react';
import Link from 'gatsby-link';
import { compose, mapProps } from 'recompose';

const withMappedProps = mapProps(({
  data: { allSitePage: { edges } },
}) => ({
  articles: edges.map(({ node }) => ({
    ...node.context.article,
    path: node.path,
  })),
}));

export default compose(
  withMappedProps,
)(({
  articles,
}) => (
  <div>
    <p>Welcome to your new Wings-powered Gatsby site.</p>
    <p>We found the following Articles:</p>
    <ul>
      {articles.map(article => (
        <li key={`article${article.id}`}>
          <Link to={article.path}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));

export const query = graphql`
  query IndexPageQuery {
    allSitePage(filter: { context: { article: { id: { ne: null } } } }) {
      edges {
        node {
          path
          context {
            article {
              id
              title
            }
          }
        }
      }
    }
  }
`;
