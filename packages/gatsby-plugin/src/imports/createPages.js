const articleQuery = `
  {
    allWingsArticle {
      edges {
        node {
          article {
            id
            title
            slug
            content
            platforms {
              all {
                title
                description
                imageUrl
              }
              facebook {
                title
                description
                imageUrl
              }
              twitter {
                title
                description
                imageUrl
              }
            }
            updatedAt
            createdAt
          }
        }
      }
    }
  }
`;

export default async (
  { boundActionCreators: { createPage }, graphql },
  { components: { article } = [] },
) => {
  if (!article) {
    console.error('article component unspecified');
    process.exit(1);
  }

  const res = await graphql(articleQuery);
  if (!res.data) return;
  res.data.allWingsArticle.edges.forEach(({ node }) => {
    if (!node.article.slug) return null;
    return createPage({
      path: `/${node.article.slug}`,
      component: article,
      context: {
        id: node.id,
        article: node.article,
      },
    });
  });
};
