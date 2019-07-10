import React from 'react';
import { Campaign } from '@wingscms/react';
import routing from '../../services/routing';

export default props => (
  <Campaign redirectUrlForNode={node => routing.getCampaignConfirmedUrl(node)} {...props} />
);
