import React, { Component } from 'react';
import Petition from './Petition';

export default class PetitionConfirm extends Component {
  static Main = (props) => {
    const {
      pageContext: {
        node: { meta },
      },
    } = props;
    return (
      <Petition.Content {...props}>
        <Petition.Title>{meta.confirmationTitle || 'We zijn er nog niet...'}</Petition.Title>
        <p>
          {meta.confirmationText ||
            'We hebben je een mailtje gestuurd met een bevestigingslink, om te zorgen dat alle ondertekeningen echt zijn. Als je daarop klikt, telt je ondertekening mee. Alvast bedankt!'}
        </p>
      </Petition.Content>
    );
  };
  static defaultProps = {
    children: [<Petition.Navigation />, <PetitionConfirm.Main />],
  };
  render() {
    return <Petition {...this.props} />;
  }
}
