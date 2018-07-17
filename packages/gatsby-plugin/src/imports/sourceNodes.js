import sourceArticles from './sourceArticles';
import sourceEntries from './sourceEntries';
import sourceCampaigns from './sourceCampaigns';

export default async ({ boundActionCreators: { createNode } }, { endpoint, project, appKey }) => {
  try {
    const articles = await sourceArticles({ endpoint, project, token: appKey });
    articles.forEach(a => createNode(a));
    const campaigns = await sourceCampaigns({ endpoint, project, token: appKey });
    campaigns.forEach(camp => camp.events.forEach(e => createNode(e)));
    const entries = await sourceEntries({ endpoint, project, token: appKey });
    entries.forEach(e => createNode(e));
  } catch (e) {
    console.log(e);
  }
};
