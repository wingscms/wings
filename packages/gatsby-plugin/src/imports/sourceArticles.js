import { md5, query } from './utils';

const articleToNode = a => ({
  article: a,

  id: a.id,
  parent: null,
  children: [],
  internal: {
    type: 'WingsArticle',
    contentDigest: md5(JSON.stringify(a.id)),
  },
});

const q = `
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

export default async ({ endpoint, token, project }) => {
  try {
    const res = await query({
      query: q,
      endpoint,
      token,
      project,
    });
    if (res.error) {
      console.error('[Wings]: unable to source articles', res.error);
      return [];
    }
    return res.data.articles.map(a => articleToNode(a));
  } catch (err) {
    console.error(err);
    return [];
  }
};
