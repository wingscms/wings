import { QuoteCard } from '@wingscms/react';

export const BlockQuote = () =>
  QuoteCard.render({
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    source: 'Source',
    sourceUrl: 'example.com',
    type: 1,
    float: 0,
  });

export const PullQuote = () =>
  QuoteCard.render({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    source: 'Source',
    sourceUrl: 'example.com',
    type: 1,
    float: 2,
  });
