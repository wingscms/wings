import React from 'react';
import LandingSection from './LandingSection';
import SimpleHeader from './SimpleHeader';

export default ({ article, skipToContentTooltip }) => {
  const { image } = article;
  if (image) {
    return <LandingSection article={article} titleAttribute={skipToContentTooltip} />;
  }
  return <SimpleHeader article={article} />;
};
