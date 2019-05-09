import React from 'react';
import { createCard, Content as WContent } from '@wingscms/react';
import { ThemeProvider, withTheme } from 'styled-components';
import {
  QuoteCard,
  InsightCard,
  ImageCard,
  EmbedCard,
  HeaderCard,
  CTACard,
  DataCard,
  CollectionCard,
  TestimonialCard,
  QACard,
} from '../cards';

const provideTheme = theme => (card) => {
  const Component = card.View;
  return createCard({
    name: card.name,
    renderWith: props => (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    ),
  });
};

const CARDS = [
  QuoteCard,
  InsightCard,
  ImageCard,
  EmbedCard,
  HeaderCard,
  CTACard,
  DataCard,
  CollectionCard,
  TestimonialCard,
  QACard,
];

const Content = withTheme(({ theme, ...props }) => (
  <WContent cards={CARDS.map(provideTheme(theme))} {...props} />
));

export default Content;
