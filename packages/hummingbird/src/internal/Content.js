import React from 'react';
import { injectIntl as withIntl } from 'react-intl';
import campaignProps from './campaignProps';
import Content from '../components/Content';

export default withIntl(({ intl, ...props }) => (
  <Content
    {...props}
    cardProps={{
      CampaignCard: {
        ...campaignProps(intl),
      },
    }}
  />
));
