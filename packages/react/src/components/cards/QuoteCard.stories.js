import faker from 'faker';
import { QuoteCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

const payload = () => ({
  text: faker.lorem.sentence(),
  source: [faker.name.firstName(), faker.name.lastName()].join(' '),
  sourceUrl: 'https://wings.dev',
});

export const BlockQuote = () =>
  QuoteCard.render({
    type: 'blockquote',
    ...payload(),
  });

export const PullQuote = () =>
  QuoteCard.render({
    type: 'pullquote',
    align: 'center',
    ...payload(),
  });

export const wrapStory = contentWrap;
