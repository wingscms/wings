import React from 'react';
import {
  PersonCollection as _PersonCollection,
  OrganisationCollection as _OrganisationCollection,
} from './Deprecated';

import createCard from '../../../createCard';

function CollectionCardView({ type, ...props }) {
  switch (type) {
    case 0:
      console.warn('This type of collection card is now deprecated');
      return <_PersonCollection {...props} />;
    case 1:
      console.warn('This type of collection card is now deprecated');
      return <_OrganisationCollection {...props} />;
    default:
      return null;
  }
}

export default createCard({
  name: 'CollectionCard',
  renderWith: CollectionCardView,
});
