import React, { Component } from 'react';
import Campaign from './Campaign';

const CAMPAIGN_CONFIRM_TITLE = "We're almost there!";
const CAMPAIGN_CONFIRM_BODY = `We have sent you an email with a confirmation link to make sure all signatures are genuine.
If you follow that link, your signature will count. Thanks!`;

export default class CampaignConfirm extends Component {
  static Main = props => (
    <Campaign.Content {...props}>
      <Campaign.Title>{CAMPAIGN_CONFIRM_TITLE}</Campaign.Title>
      <p>{CAMPAIGN_CONFIRM_BODY}</p>
    </Campaign.Content>
  );
  static defaultProps = {
    children: [<Campaign.Navigation />, <CampaignConfirm.Main />],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
