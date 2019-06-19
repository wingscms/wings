import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { createCard } from '@wingscms/react';
import Campaign from '../components/Campaign';

import wide from '../styles/wide';

const Container = styled.div`
  ${wide};
  margin-top: 80px;
  margin-bottom: 80px;
`;

class CampaignCardView extends Component {
  render() {
    const { id, resourceType } = this.props;
    if (!id || !resourceType) {
      console.warn('[hummingbird] CampaignCard does not reference an existing campaign');
      return null;
    }
    return (
      <Container>
        <Campaign id={id} resourceType={resourceType} {...this.props} campaignCard />
      </Container>
    );
  }
}

export default createCard({
  name: 'CampaignCard',
  renderWith: withTheme(CampaignCardView),
});
