import React from 'react';
import { injectIntl as withIntl } from 'react-intl';
import useCampaignProps from '../hooks/campaignProps';
import Content from '../components/Content';

export default withIntl(({ intl, ...props }) => {
  const campaignProps = useCampaignProps(intl);
  return (
    <Content
      {...props}
      cardProps={{
        CampaignCard: {
          ...campaignProps,
        },
      }}
    />
  );
});
