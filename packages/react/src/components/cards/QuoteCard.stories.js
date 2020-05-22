import { QuoteCard } from '@wingscms/react';
import { Pullquote } from '@wingscms/components';
import { text, select } from '@storybook/addon-knobs/react';
import { contentWrap } from '../../../../../utils';

export const BlockQuote = () =>
  QuoteCard.render({
    type: QuoteCard.Type.BLOCKQUOTE,
    text: text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ),
    source: text('source', 'Source'),
    sourceUrl: text('sourceUrl', 'http://example.com'),
  });

export const PullQuote = () =>
  QuoteCard.render({
    type: QuoteCard.Type.PULLQUOTE,
    text: text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ),
    source: text('source', 'Source'),
    sourceUrl: text('sourceUrl', 'http://example.com'),
    align: select('align', Pullquote.Align, Pullquote.Align.CENTER),
  });

export const wrapStory = contentWrap;
