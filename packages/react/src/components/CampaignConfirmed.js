import React from 'react';
import fP from 'filter-invalid-dom-props';
import { Heading, SocialButtons, Text } from '@wingscms/components';

import { useIntl } from '../ctx/Intl';

const ResourceType = {
  EVENT: 'node.event',
  FUNDRAISER: 'node.fundraiser',
  PETITION: 'node.peition',
  SIGNUP: 'node.signup',
};

const TransactionStatus = {
  FAILED: 'failed',
  PENDING: 'pending',
  SUCCESS: 'success',
  NONE: 'none',
};

const getCopy = (copy, resourceType, transactionStatus) => {
  const intl = useIntl();
  const {
    eventTitle = intl.formatMessage('wings.CampaignConfirmed.main.eventTitle'),
    eventText = intl.formatMessage('wings.CampaignConfirmed.main.eventText'),
    eventShareTitle = intl.formatMessage('wings.CampaignConfirmed.main.eventShareTitle'),
    fundraiserDefaultTitle = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserDefaultTitle',
    ),
    fundraiserDefaultText = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserDefaultTitle',
    ),
    fundraiserFailedTitle = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserFailedTitle',
    ),
    fundraiserFailedText = intl.formatMessage('wings.CampaignConfirmed.main.fundraiserFailedTitle'),
    fundraiserPendingTitle = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserPendingTitle',
    ),
    fundraiserPendingText = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserPendingTitle',
    ),
    fundraiserSuccessTitle = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserSuccessTitle',
    ),
    fundraiserSuccessText = intl.formatMessage(
      'wings.CampaignConfirmed.main.fundraiserSuccessTitle',
    ),
    fundraiserShareTitle = intl.formatMessage('wings.CampaignConfirmed.main.fundraiserShareTitle'),
    petitionTitle = intl.formatMessage('wings.CampaignConfirmed.main.petitionTitle'),
    petitionText = intl.formatMessage('wings.CampaignConfirmed.main.petitionText'),
    petitionShareTitle = intl.formatMessage('wings.CampaignConfirmed.main.petitionShareTitle'),
    signupTitle = intl.formatMessage('wings.CampaignConfirmed.main.signupTitle'),
    signupText = intl.formatMessage('wings.CampaignConfirmed.main.signupText'),
    signupShareTitle = intl.formatMessage('wings.CampaignConfirmed.main.signupShareTitle'),
  } = copy;

  const getFundraiserCopy = transactionStatus => {
    switch (transactionStatus) {
      case TransactionStatus.FAILED:
        return {
          title: fundraiserFailedTitle,
          text: fundraiserFailedText,
        };
      case TransactionStatus.PENDING:
        return {
          title: fundraiserPendingTitle,
          text: fundraiserPendingText,
        };
      case TransactionStatus.SUCCESS:
        return {
          title: fundraiserSuccessTitle,
          text: fundraiserSuccessText,
        };
      default:
        return {
          title: fundraiserDefaultTitle,
          text: fundraiserDefaultText,
        };
    }
  };

  switch (resourceType) {
    case ResourceType.EVENT:
      return {
        title: eventTitle,
        text: eventText,
        shareTitle: eventShareTitle,
      };
    case ResourceType.FUNDRAISER:
      return {
        ...getFundraiserCopy(transactionStatus),
        shareTitle: fundraiserShareTitle,
      };
    case ResourceType.SIGNUP:
      return {
        title: signupTitle,
        text: signupText,
        shareTitle: signupShareTitle,
      };
    case ResourceType.PETITION:
    default:
      return {
        title: petitionTitle,
        text: petitionText,
        shareTitle: petitionShareTitle,
      };
  }
};

export default function CampaignConfirmed({
  copy = {},
  resourceType,
  transactionStatus,
  shareButtons,
  ...props
}) {
  const { title, text, shareTitle } = getCopy(copy, resourceType, transactionStatus);

  return (
    <div {...fP(props)}>
      <Heading rank={1}>{title}</Heading>
      <Text>{text}</Text>
      {shareButtons && (
        <>
          <Heading rank={2}>{shareTitle}</Heading>
          <SocialButtons>
            {shareButtons.map(({ icon, url, ...props }, idx) => (
              <SocialButtons.Button icon={icon} url={url} key={idx} {...props} />
            ))}
          </SocialButtons>
        </>
      )}
    </div>
  );
}

CampaignConfirmed.ResourceType = ResourceType;
CampaignConfirmed.TransactionStatus = TransactionStatus;
