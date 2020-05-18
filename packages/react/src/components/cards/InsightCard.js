import React from 'react';
import { Insight } from '@wingscms/components';
import createCard from '../../createCard';
import OffGridContainer from '../OffGridContainer';

function InsightCardView({ text, ...props }) {
  return (
    <OffGridContainer>
      <Insight {...props}>{text}</Insight>
    </OffGridContainer>
  );
}
export default createCard({
  name: 'InsightCard',
  renderWith: InsightCardView,
});
