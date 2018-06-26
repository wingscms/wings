import { md5, query, ensureNodeFields } from './utils';

const articleToNode = (a) => {
  const node = {
    article: ensureNodeFields(a),

    id: a.id,
    parent: null,
    children: [],
    internal: {
      type: 'WingsArticle',
      contentDigest: md5(JSON.stringify(a.id)),
    },
  };

  return node;
};

const q = `
{
  articles {
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
