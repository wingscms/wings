import React from 'react';
import { FormattedMessage } from 'react-intl';
import Title from './Title';
import Text from './Text';

export default ({ status }) => {
  switch (status) {
    case 'complete':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.successTitle"
            description="Title of fundraiser payment success."
            defaultMessage="Hurray!"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.successText"
            description="Text of fundraiser payment success."
            defaultMessage="Thank you. The payment was successful"
            tagName={Text}
          />
        </React.Fragment>
      );
    case 'pending':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.pendingTitle"
            description="Title of fundraiser payment pending."
            defaultMessage="Thanks for your contribution"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.pendingText"
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
            id="hummingbird.CampaignConfirmed.fundraiserMain.failedTitle"
            description="Title of fundraiser payment failure."
            defaultMessage="Oh no!"
            tagName={Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.failedText"
            description="Text of fundraiser payment failure."
            defaultMessage="Thanks for your interest. It seems like something went wrong with the payment. Please check with your bank and try again."
            tagName={Text}
          />
        </React.Fragment>
      );
  }
};
