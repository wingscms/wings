import React from 'react';
import LandingSection from './LandingSection';

export default ({ article, skipToContentTooltip }) => (
  <LandingSection article={article} titleAttribute={skipToContentTooltip} />
);
