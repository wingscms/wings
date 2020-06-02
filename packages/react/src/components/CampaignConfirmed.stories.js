import React from 'react';
import { CampaignConfirmed } from '@wingscms/react';
import { select } from '@storybook/addon-knobs/react';
import { contentWrap } from '../../../../utils';

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
  shareButtons: [
    {
      icon: 'facebook',
      url: 'example.com',
    },
    {
      icon: 'twitter',
      url: 'example.com',
    },
    {
      icon: 'instagram',
      url: 'example.com',
    },
    {
      icon: 'email',
      url: 'example.com',
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

export const wrapStory = contentWrap;
