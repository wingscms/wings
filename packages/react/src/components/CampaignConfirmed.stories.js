import React from 'react';
import { ShareButtons } from '@wingscms/components';
import { CampaignConfirmed } from '@wingscms/react';
import { select } from '@storybook/addon-knobs/react';

const props = ({
  resourceType = CampaignConfirmed.ResourceType.PETITION,
  transactionStatus = CampaignConfirmed.TransactionStatus.NONE,
} = {}) => ({
  resourceType: select('resourceType', CampaignConfirmed.ResourceType, resourceType),
  transactionStatus: select(
    'transactionStatus',
    CampaignConfirmed.TransactionStatus,
    transactionStatus,
  ),
  shareItems: [
    {
      platform: ShareButtons.Platform.FACEBOOK,
      url: '',
    },
    {
      platform: ShareButtons.Platform.TWITTER,
      url: '',
    },
    {
      platform: ShareButtons.Platform.WHATSAPP,
      url: '',
    },
    {
      platform: ShareButtons.Platform.EMAIL,
      url: '',
    },
  ],
});

export default () => <CampaignConfirmed {...props()} />;
export const Petition = () => (
  <CampaignConfirmed {...props({ resourceType: CampaignConfirmed.ResourceType.PETITION })} />
);
export const Event = () => (
  <CampaignConfirmed {...props({ resourceType: CampaignConfirmed.ResourceType.EVENT })} />
);
export const Fundraiser = () => (
  <CampaignConfirmed
    {...props({
      resourceType: CampaignConfirmed.ResourceType.FUNDRAISER,
      transactionStatus: CampaignConfirmed.TransactionStatus.SUCCESS,
    })}
  />
);
export const Signup = () => (
  <CampaignConfirmed {...props({ resourceType: CampaignConfirmed.ResourceType.SIGNUP })} />
);
