import React from 'react';
import { Content, CampaignCardView, createCard } from '@wingscms/react';
import routing from '../../services/routing';

const CampaignCard = createCard({
  name: 'CampaignCard',
  renderWith: props => (
    <CampaignCardView
      redirectUrlForNode={node => routing.getCampaignConfirmedUrl(node)}
      {...props}
    />
  ),
});

export default props => <Content {...props} cards={[CampaignCard]} />;
