import React, { Component } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { createCard } from '@wingscms/react';
import _Campaign from '../components/Campaign';

import wide from '../styles/wide';

const Container = styled.div`
  ${wide};
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Campaign = styled(_Campaign)`
  margin-top: 0;
`;

const Wrapper = styled.div`
  ${wide}
  ${({ imageUrl }) =>
    (imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
          height: auto;
          padding-top: 80px;
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
        wrapElement={(element, campaign) =>
          console.log(element, campaign) || (
            <Wrapper imageUrl={campaign.image && campaign.image.url}>
              <Container>{element}</Container>
            </Wrapper>
          )
        }
      />
    );
  }
}

export default createCard({
  name: 'CampaignCard',
  renderWith: withTheme(CampaignCardView),
});
