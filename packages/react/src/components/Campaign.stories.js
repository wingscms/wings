import React from 'react';
import { Campaign } from '@wingscms/react';

export const Petition = () => (
  <Campaign
    id="asdasd"
    resourceType="node.petition"
    copy={{
      descriptionExpand: 'More',
      petitionCounterMessage: 'have signed the petition',
      petitionCounterGoalText: '500',
    }}
    signatureCount={50}
    signatureGoal={500}
  />
);

export const Fundraiser = () => (
  <Campaign
    id="asdasd"
    resourceType="node.fundraiser"
    copy={{
      descriptionExpand: 'More',
      fundraiserCounterMessage: 'has been donated',
      fundraiserTargetText: '500',
    }}
  />
);

export const Event = () => (
  <Campaign
    id="asdasd"
    resourceType="node.event"
    copy={{
      descriptionExpand: 'More',
      eventInfoTitle: 'Event Information',
      eventLocationLabel: 'Location',
      eventFeeLabel: 'Fee',
      eventFee: '€5',
    }}
  />
);
