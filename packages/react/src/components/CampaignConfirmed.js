import React from 'react';
import fP from 'filter-invalid-dom-props';
import { ShareButtons } from '@wingscms/components';

import styled from '../lib/styled';
import { useIntl } from '../ctx/Intl';

const Title = styled.h1`
  font-size: 3em;
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

const Text = styled.p`
  font-size: 18px;
  @media screen and (min-width: 800px) {
    font-size: 24px;
  }
`;

const ShareTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 0.4em;
  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
`;

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

const CampaignConfirmed = ({
  copy = {},
  resourceType,
  transactionStatus,
  shareItems,
  ...props
}) => {
  const { title, text, shareTitle } = getCopy(copy, resourceType, transactionStatus);

  return (
    <div {...fP(props)}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {shareItems && (
        <>
          <ShareTitle>{shareTitle}</ShareTitle>
          <ShareButtons items={shareItems} />
        </>
      )}
    </div>
  );
};

CampaignConfirmed.ResourceType = ResourceType;
CampaignConfirmed.TransactionStatus = TransactionStatus;

export default CampaignConfirmed;
