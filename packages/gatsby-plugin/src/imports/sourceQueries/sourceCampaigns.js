import { md5, query /* , ensureNodeFields */ } from '../utils';

const campaignToNode = (c) => {
  const node = {
    campaign: {
      ...c,
    },
    id: c.id,
    parent: null,
    children: [],
    internal: {
      type: 'WingsCampaign',
      contentDigest: md5(JSON.stringify(c.id)),
    },
  };
  return node;
};

const q = `
  {
    campaigns {
      id
      title
      slug
      petitions {
        id
        title
        slug
        meta {
          key
          value
        }
        status
        campaign {
          id
        }
        intro
        description
        signatureCount
        image {
          id
          caption
          alt
          url
        }
      }
      events {
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
          end
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
      console.error('[Wings]: unable to source campaigns', res.error);
      return [];
    }
    console.log(res.data.campaigns);
    return res.data.campaigns.map(c => campaignToNode(c));
  } catch (e) {
    console.log(e);
    return [];
  }
};
