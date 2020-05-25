import { QuoteCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export const BlockQuote = () =>
  QuoteCard.render({
    type: 'blockquote',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    source: 'Source',
    sourceUrl: 'http://example.com',
  });

export const PullQuote = () =>
  QuoteCard.render({
    type: 'pullquote',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    source: 'Source',
    sourceUrl: 'http://example.com',
    align: 'center',
  });

export const wrapStory = contentWrap;
