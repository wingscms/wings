import { articleQuery, campaignQuery, entryQuery, eventQuery } from './pagesQueries';

export default async (
  { boundActionCreators: { createPage }, graphql },
  { templates: { article, campaign, event, entry } = {} },
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
          id: node.article.id,
          article: node.article,
        },
      });
    });
  }

  const entries = await graphql(entryQuery);
  if (
    entries.data &&
    entries.data.allWingsEntry &&
    entries.data.allWingsEntry.edges &&
    entries.data.allWingsEntry.edges.length
  ) {
    console.log(entries.data);

    entries.data.allWingsEntry.edges.forEach(({ node }) => {
      console.log(node);

      if (!(node.entry.slug && entry)) return null;
      return createPage({
        path: `/${node.entry.slug}`,
        component: entry,
        context: {
          id: node.entry.id,
          entry: node.entry,
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
          id: node.event.id,
          event: node.event,
        },
      });
    });
  }

  const campaigns = await graphql(campaignQuery);
  if (campaigns.data) {
    campaigns.data.allWingsCampaign.edges.forEach(({ node }) =>
      // We need to add the ability to change campaign data in Wings (such as the slug here)
      // if (!node.campaign.slug) return null;

      createPage({
        // Using id here until slug can be used. See previous comment.
        path: `/campaigns/${node.campaign.id}`,
        component: campaign,
        context: {
          id: node.campaign.id,
          campaign: node.campaign,
        },
      }),
    );
  }
};
