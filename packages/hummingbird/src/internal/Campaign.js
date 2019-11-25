import React from 'react';
import { injectIntl as withIntl } from 'react-intl';
import useCampaignProps from '../hooks/campaignProps';
import Campaign from '../components/Campaign';

export default withIntl(({ intl, ...props }) => {
  const campaignProps = useCampaignProps(intl);

  return <Campaign {...campaignProps} {...props} />;
});
