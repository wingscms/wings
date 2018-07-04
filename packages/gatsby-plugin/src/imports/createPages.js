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
            image {
              url
            }
            platforms {
              all {
                title
                description
                medium {
                  url
                }
              }
              facebook {
                title
                description
                medium {
                  url
                }
              }
              twitter {
                title
                description
                medium {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const eventQuery = `
  {
    allWingsCampaignEvent {
      edges {
        node {
          id
          event {
            id
            title
            slug
            intro
            description
            image {
              url
            }
            schedule {
              start
            }
            location {
              name
              street
              city
              zip
              country
            }
            fee {
              amount
              currencyCode
            }
            
            platforms {
              all {
                title
                description
                medium {
                  url
                }
              }
              facebook {
                title
                description
                medium {
                  url
                }
              }
              twitter {
                title
                description
                medium {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default async (
  { boundActionCreators: { createPage }, graphql },
  { templates: { article, event } = {} },
) => {
  if (!article) {
    console.error('article component unspecified');
    process.exit(1);
  }

  const res = await graphql(articleQuery);
  if (res.data) {
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
  }

  const events = await graphql(eventQuery);
  if (events.data) {
    events.data.allWingsCampaignEvent.edges.forEach(({ node }) => {
      if (!node.event.slug) return null;

      return createPage({
        path: `/events/${node.event.slug}`,
        component: event,
        context: {
          id: node.id,
          event: node.event,
        },
      });
    });
  }
};
