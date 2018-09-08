import { ImageCard, QuoteCard } from './cards';

export const allCards = [ImageCard, QuoteCard];

export { ImageCard, QuoteCard };

export { default as createCard } from './createCard';

export { default as Platforms } from './components/Platforms';
export { default as Content } from './components/Content';
export { slugify } from './lib/utils';
