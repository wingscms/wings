/* eslint-disable react/jsx-fragments */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Title from './Title';
import Text from './Text';
import ShareTitle from './ShareTitle';

export default () => (
  <React.Fragment>
    <FormattedMessage
      id="hummingbird.CampaignConfirmed.main.signupTitle"
      description="Title of campaign submission success."
      defaultMessage="Hurray!"
      tagName={Title}
    />
    <FormattedMessage
      id="hummingbird.CampaignConfirmed.main.signupText"
      description="Text of campaign submission success."
      defaultMessage="Thanks to you, we are one step closer towards our goals."
      tagName={Text}
    />
  </React.Fragment>
);

export const SignupShareTitle = () => (
  <FormattedMessage
    id="hummingbird.CampaignConfirmed.main.signupShareTitle"
    description="Title above campaign share buttons."
    defaultMessage="Please share with your friends and colleagues:"
    tagName={ShareTitle}
  />
);
