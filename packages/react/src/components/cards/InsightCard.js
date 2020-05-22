import React from 'react';
import { Insight } from '@wingscms/components';
import createCard from '../../createCard';
import _OffGridContainer from '../OffGridContainer';
import styled from '../../lib/styled';
import { t } from '../../theme';

const OffGridContainer = styled(_OffGridContainer)`
  margin-top: ${t(_ => _.mediumSpacing)};
  margin-bottom: ${t(_ => _.mediumSpacing)};
`;

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
