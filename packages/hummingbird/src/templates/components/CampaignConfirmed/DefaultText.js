import React from 'react';
import FundraiserText, { FundraiserShareTitle } from './FundraiserText';
import EventText, { EventShareTitle } from './EventText';
import SignupText, { SignupShareTitle } from './SignupText';
import PetitionText, { PetitionShareTitle } from './PetitionText';

export default ({ resourceType, location }) => {
  switch (resourceType) {
    case 'node.fundraiser':
      return (
        <React.Fragment>
          <FundraiserText location={location} />
        </React.Fragment>
      );
    case 'node.event':
      return <EventText />;
    case 'node.signup':
      return <SignupText />;
    case 'node.petition':
    default:
      return <PetitionText />;
  }
};

export const DefaultShareTitle = ({ resourceType }) => {
  switch (resourceType) {
    case 'node.fundraiser':
      return <FundraiserShareTitle />;
    case 'node.event':
      return <EventShareTitle />;
    case 'node.signup':
      return <SignupShareTitle />;
    case 'node.petition':
    default:
      return <PetitionShareTitle />;
  }
};
