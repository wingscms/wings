import React from 'react';
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
  CampaignCard,
} from '../../cards';

import Content from './Content';

// const provideTheme = theme => (card) => {
//   const Component = card.View;
//   return createCard({
//     name: card.name,
//     renderWith: props => (
//       <ThemeProvider theme={theme}>
//         <Component {...props} />
//       </ThemeProvider>
//     ),
//   });
// };

export default props => (
  <Content
    cards={[
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
      CampaignCard,
    ]}
    {...props}
  />
);
