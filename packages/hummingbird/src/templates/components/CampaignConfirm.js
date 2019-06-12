import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Campaign from './Campaign';

export default class CampaignConfirm extends Component {
  static Main = props => (
    <Campaign.Content {...props}>
      <FormattedMessage
        id="hummingbird.CampaignConfirm.main.title"
        description="Title of campaign confirmation."
        defaultMessage="We’re almost there!"
        tagName={Campaign.Title}
      />
      <FormattedMessage
        id="hummingbird.CampaignConfirm.main.text"
        description="Body of campaign confirmation."
        defaultMessage="We have sent you an email with a confirmation link to make sure all signatures are genuine. If you follow that link, your signature will count. Thanks!"
        tagName="p"
      />
    </Campaign.Content>
  );
  static defaultProps = {
    children: [<Campaign.Navigation />, <CampaignConfirm.Main />],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
