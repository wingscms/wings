import React, { Component } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { createCard } from '@wingscms/react';
import _Campaign from '../components/Campaign';

import wide from '../styles/wide';

const Container = styled.div`
  ${wide};
  margin-bottom: 80px;
`;

const Campaign = styled(_Campaign)`
  margin-top: 0;
`;

const Image = styled.div`
  ${wide}

  ${({ imageUrl }) =>
    (imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
          min-height: 500px;
          max-height: 700px;
          margin-bottom: -20%;
          padding-top: 80px;
          @media screen and (max-width: 800px) {
            min-height: 0;
            margin-bottom: 0;
            max-height: 0;
            height: auto;
            padding-top: 50%;
          }
        `
      : null)}
`;

class CampaignCardView extends Component {
  render() {
    const { id, resourceType } = this.props;
    if (!id || !resourceType) {
      console.warn('[hummingbird] CampaignCard does not reference an existing campaign');
      return null;
    }
    return (
      <Campaign
        id={id}
        resourceType={resourceType}
        {...this.props}
        style={{ marginTop: '0' }}
        wrapElement={(element, campaign) => (
          <div>
            <Image imageUrl={campaign && campaign.image && campaign.image.url} />
            <Container>{element}</Container>
          </div>
        )}
      />
    );
  }
}

export default createCard({
  name: 'CampaignCard',
  renderWith: withTheme(CampaignCardView),
});
