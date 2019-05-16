import React, { Component } from 'react';
import Campaign from './Campaign';

export default class CampaignConfirm extends Component {
  static Main = (props) => {
    const {
      pageContext: {
        node: { meta },
      },
    } = props;
    console.log('CampaignConfirm props', props);
    return (
      <Campaign.Content {...props}>
        <Campaign.Title>{meta.confirmationTitle || 'We zijn er nog niet...'}</Campaign.Title>
        <p>
          {meta.confirmationText ||
            'We hebben je een mailtje gestuurd met een bevestigingslink, om te zorgen dat alle ondertekeningen echt zijn. Als je daarop klikt, telt je ondertekening mee. Alvast bedankt!'}
        </p>
      </Campaign.Content>
    );
  };
  static defaultProps = {
    children: [<Campaign.Navigation />, <CampaignConfirm.Main />],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
