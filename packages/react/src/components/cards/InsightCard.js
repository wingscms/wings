import React from 'react';
import { Insight, wide } from '@wingscms/components';
import styled from '../../lib/styled';
import createCard from '../../createCard';

const _Insight = styled(Insight)`
  ${wide}
`;

function InsightCardView({ text, ...props }) {
  return <_Insight {...props}>{text}</_Insight>;
}
export default createCard({
  name: 'InsightCard',
  renderWith: InsightCardView,
});
