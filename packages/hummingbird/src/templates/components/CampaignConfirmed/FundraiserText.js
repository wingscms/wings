/* eslint-disable react/jsx-fragments */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Title from './Title';
import Text from './Text';
import ShareTitle from './ShareTitle';

export default ({ transactionStatus }) => {
  switch (transactionStatus) {
    case 'complete':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserSuccessTitle"
            description="Title of fundraiser payment success."
            defaultMessage="Hurray!"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserSuccessText"
            description="Text of fundraiser payment success."
            defaultMessage="Thank you. The payment was successful."
            tagName={Text}
          />
        </React.Fragment>
      );
    case 'failed':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserFailedTitle"
            description="Title of fundraiser payment failure."
            defaultMessage="Oh no!"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserFailedText"
            description="Text of fundraiser payment failure."
            defaultMessage="Thanks for your interest. It seems like something went wrong with the payment. Please check with your bank and try again."
            tagName={Text}
          />
        </React.Fragment>
      );
    case 'pending':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserPendingTitle"
            description="Title of fundraiser payment pending."
            defaultMessage="Thanks for your contribution"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserPendingText"
            description="Text of fundraiser payment pending."
            defaultMessage="Thanks for your contribution. Your payment is still processing. Please check with your bank to verify your payment."
            tagName={Text}
          />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserDefaultTitle"
            description="Title of default fundraiser title with no transaction status."
            defaultMessage="Thank you!"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.main.fundraiserDefaultText"
            description="Text of default fundraiser text with no transaction status."
            defaultMessage="Thank you for your interest in this fundraiser."
            tagName={Text}
          />
        </React.Fragment>
      );
  }
};

export const FundraiserShareTitle = () => (
  <FormattedMessage
    id="hummingbird.CampaignConfirmed.main.fundraiserShareTitle"
    description="Title above campaign share buttons."
    defaultMessage="Please share this fundraiser with your friends and colleagues:"
    tagName={ShareTitle}
  />
);
