import React from 'react';
import LandingSection from './LandingSection';

export default ({ article, landingSectionTooltip }) => (
  <LandingSection article={article} titleAttribute={landingSectionTooltip} />
);
