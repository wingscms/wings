import React from 'react';
import { FormattedMessage } from 'react-intl';
import Title from './Title';
import Text from './Text';

export default () => (
  <React.Fragment>
    <FormattedMessage
      id="hummingbird.CampaignConfirmed.main.title"
      description="Title of campaign submission success."
      defaultMessage="Hurray!"
      tagName={Title}
    />
    <FormattedMessage
      id="hummingbird.CampaignConfirmed.main.text"
      description="Text of campaign submission success."
      defaultMessage="Thanks to you, we are one step closer towards our goals."
      tagName={Text}
    />
  </React.Fragment>
);
