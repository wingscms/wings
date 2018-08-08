import { md5, query, ensureNodeFields } from '../utils';

const eventToNode = e => ({
  event: ensureNodeFields({
    ...e,
    schedule: { start: e.schedule ? new Date(e.schedule.start) : null },
  }),

  id: e.id,
  parent: null,
  children: [],
  internal: {
    type: 'WingsCampaignEvent',
    contentDigest: md5(JSON.stringify(e.id)),
  },
});

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
      console.error('[Wings]: unable to source events', res.error);
      return [];
    }

    return res.data.campaigns.map(c => ({
      ...c,
      events: c.events.map(e => eventToNode(e)),
    }));
  } catch (e) {
    console.log(e);
    return [];
  }
};
