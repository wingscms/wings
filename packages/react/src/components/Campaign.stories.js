import React from 'react';
import { Campaign } from '@wingscms/react';
import { backgroundWrap } from '../../../../utils';

export const Petition = () => (
  <Campaign id="asdasd" resourceType="node.petition" signatureCount={50} signatureGoal={500} />
);

export const Fundraiser = () => <Campaign id="asdasd" resourceType="node.fundraiser" />;

export const Event = () => <Campaign id="asdasd" resourceType="node.event" />;

Petition.snapshotDelay = 1;
Fundraiser.snapshotDelay = 1;
Event.snapshotDelay = 1;

export const wrapStory = backgroundWrap;
