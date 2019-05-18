import React, { Component } from 'react';
import Campaign from './Campaign';

const CAMPAIGN_CONFIRM_TITLE = "We're almost there!";
const CAMPAIGN_CONFIRM_BODY = `We hebben je een mailtje gestuurd met een bevestigingslink, om te zorgen dat alle
        ondertekeningen echt zijn. Als je daarop klikt, telt je ondertekening mee. Alvast bedankt!`;

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
