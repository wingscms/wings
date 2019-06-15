import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { createCard } from '@wingscms/react';
import { Campaign } from '@wingscms/hummingbird';

import wide from '../styles/wide';

const Container = styled.div`
  ${wide};
  margin-top: 80px;
  margin-bottom: 80px;
`;

class CampaignCardView extends Component {
  render() {
    const { campaign } = this.props;
    return (
      <Container>
        <Campaign.Main pageContext={{ ...campaign }} campaignCard {...this.props} />
      </Container>
    );
  }
}

export default createCard({
  name: 'CampaignCard',
  renderWith: withTheme(CampaignCardView),
});
