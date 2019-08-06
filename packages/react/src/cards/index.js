import _ImageCard from './ImageCard';
import _InsightCard from './InsightCard';
import _QuoteCard from './QuoteCard';
import _TestimonialCard from './TestimonialCard';
import _EmbedCard from './EmbedCard';
import _HeaderCard from './HeaderCard';
import _CTACard from './CTACard';
import _DataCard from './DataCard';
import _CollectionCard from './CollectionCard';
import _QACard from './QACard';
import _TextCard from './TextCard';
import _CampaignCard, { CampaignCardView as _CampaignCardView } from './CampaignCard';

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
export const TextCard = _TextCard;
export const CampaignCard = _CampaignCard;

export const CampaignCardView = _CampaignCardView;

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
  TextCard: _TextCard,
  CampaignCard: _CampaignCard,
};

export const allCards = Object.values(cards);
