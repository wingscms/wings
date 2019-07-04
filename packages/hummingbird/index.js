import _ImageCard from './src/cards/components/ImageCard';
import _InsightCard from './src/cards/components/InsightCard';
import _QuoteCard from './src/cards/components/QuoteCard';
import _TestimonialCard from './src/cards/components/TestimonialCard';
import _EmbedCard from './src/cards/components/EmbedCard';
import _HeaderCard from './src/cards/components/HeaderCard';
import _CTACard from './src/cards/components/CTACard';
import _DataCard from './src/cards/components/DataCard';
import _CollectionCard from './src/cards/components/CollectionCard';
import _QACard from './src/cards/components/QACard';
import _CampaignCard from './src/cards/components/CampaignCard';

export const ImageCard = _ImageCard;
export const InsightCard = _InsightCard;
export const QuoteCard = _QuoteCard;
export const TestimonialCard = _TestimonialCard;
export const EmbedCard = _EmbedCard;
export const HeaderCard = _HeaderCard;
export const CTACard = _CTACard;
export const DataCard = _DataCard;
export const CollectionCard = _CollectionCard;
export const QACard = _QACard;
export const CampaignCard = _CampaignCard;

// components
export { default as Button } from './src/components/Button';
export { default as Content } from './src/components/Content/Content';
export { default as LayoutDefault } from './src/components/LayoutDefault';
export { default as Campaign } from './src/components/Campaign';

// templates
export { default as ArticleTemplate } from './src/templates/components/Article';
export { default as PageTemplate } from './src/templates/components/Page';
export { default as CampaignTemplate } from './src/templates/components/Campaign';

// services
export { default as routing } from './services/routing';

export const cards = {
  ImageCard: _ImageCard,
  InsightCard: _InsightCard,
  QuoteCard: _QuoteCard,
  TestimonialCard: _TestimonialCard,
  EmbedCard: _EmbedCard,
  HeaderCard: _HeaderCard,
  CTACard: _CTACard,
  DataCard: _DataCard,
  CollectionCard: _CollectionCard,
  QACard: _QACard,
  CampaignCard: _CampaignCard,
};

export const allCards = Object.values(cards);
