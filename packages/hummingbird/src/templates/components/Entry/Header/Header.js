import React from 'react';
import { LandingSection, StackedHeader } from './index';

export default ({ article }) => {
  const { meta } = article;
  switch (meta.headerType) {
    case 'stacked':
      return <StackedHeader article={article} />;
    case 'landingSection':
    default:
      return <LandingSection article={article} />;
  }
};
