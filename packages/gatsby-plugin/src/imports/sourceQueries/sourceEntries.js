import { md5, query, ensureNodeFields } from '../utils';

const entryToNode = e => ({
  entry: ensureNodeFields(e),

  id: e.id,
  parent: null,
  children: [],
  internal: {
    type: 'WingsEntry',
    contentDigest: md5(JSON.stringify(e.id)),
  },
});

const q = `
{
  entries(type: "page") {
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

export default async ({ endpoint, project, token }) => {
  try {
    const res = await query({
      query: q,
      endpoint,
      token,
      project,
    });
    if (res.error) {
      console.error('[Wings]: unable to source entries', res.error);
      return [];
    }

    return res.data.entries.map(e => entryToNode(e));
  } catch (e) {
    console.log(e);
    return [];
  }
};
