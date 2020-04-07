import React from 'react';
import { Campaign } from '@wingscms/react';

export const petition = () => (
  <Campaign
    id="asdasd"
    resourceType="node.petition"
    copy={{
      descriptionCollapse: 'Less',
      descriptionExpand: 'More',
      petitionCounterMessage: 'have signed the petition',
      petitionCounterGoalText: '500',
    }}
    signatureCount={50}
    signatureGoal={500}
  />
);

export const fundrasier = () => (
  <Campaign
    id="asdasd"
    resourceType="node.fundraiser"
    copy={{
      descriptionCollapse: 'Less',
      descriptionExpand: 'More',
      fundraiserCounterMessage: 'has been donated',
      fundraiserTargetText: '500',
    }}
  />
);

export const event = () => (
  <Campaign
    id="asdasd"
    resourceType="node.event"
    copy={{
      descriptionCollapse: 'Less',
      descriptionExpand: 'More',
      eventInfoTitle: 'Event Information',
      eventLocationLabel: 'Location',
      eventFeeLabel: 'Fee',
      eventFee: '€5',
    }}
  />
);
