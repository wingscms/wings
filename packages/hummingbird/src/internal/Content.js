import React from 'react';
import Content from '../components/Content';
import routing from '../../services/routing';

export default props => (
  <Content
    {...props}
    cardProps={{
      CampaignCard: {
        redirectUrlForNode: node => routing.getCampaignConfirmedUrl(node),
        formProps: { copy: {} },
      },
    }}
  />
);
