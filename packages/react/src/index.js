export { default as Campaign } from './components/Campaign';

export {
  allCards,
  ImageCard,
  InsightCard,
  QuoteCard,
  TestimonialCard,
  EmbedCard,
  HeaderCard,
  CTACard,
  DataCard,
  CollectionCard,
  QACard,
  CampaignCard,
} from './components/cards';

export { default as createCard } from './createCard';
export { Content } from './components/Content';
export { slugify } from './lib/utils';

export const getNodeMetaTags = (node) => {
  const { all, facebook, twitter } = node.platforms;

  return {
    title: all.title,
    meta: [
      { name: 'description', content: all.description },

      { property: 'og:title', content: facebook.title },
      { property: 'og:description', content: facebook.description },
      { property: 'og:image', content: facebook.imageUrl },
      { property: 'og:image:secure_url', content: facebook.imageUrl },
      { property: 'og:type', content: 'article' },

      { name: 'twitter:title', content: twitter.title },
      { name: 'twitter:description', content: twitter.description },
      { name: 'twitter:image', content: twitter.imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
};
