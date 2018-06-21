import { articleToNode, query } from './utils';

const articleQuery = `
  {
    articles {
      id
      title
      slug
      content
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
`;

export default async ({ boundActionCreators: { createNode } }, { endpoint, project, appKey }) => {
  try {
    const res = await query({
      query: articleQuery,
      endpoint,
      token: appKey,
      project,
    });
    if (res.error) {
      console.error('Something went wrong connecting to Wings:', res.error);
      process.exit(1);
    }
    res.data.articles.forEach(a => createNode(articleToNode(a)));
  } catch (e) {
    console.log(e);
  }
};
