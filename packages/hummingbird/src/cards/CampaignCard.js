import React, { useState } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { createCard } from '@wingscms/react';
import _Campaign from '../components/Campaign';

import wide from '../styles/wide';

const Wrapper = styled.div`
  ${wide}
  ${({ imageUrl, useImage }) =>
    (useImage && imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
          height: auto;
          padding-top: 80px;
        `
      : null)}
`;

const Container = styled.div`
  ${wide};
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Campaign = styled(_Campaign)`
  margin-top: 0;
`;

const CampaignCardView = ({ id, resourceType, useCampaignImage, ...props }) => {
  const [campaignImage, setCampaignImage] = useState(null);
  const onLoad = (campaign) => {
    setCampaignImage(campaign.image);
  };
  console.log(useCampaignImage, campaignImage);
  if (!id || !resourceType) {
    console.warn('[hummingbird] CampaignCard does not reference an existing campaign');
    return null;
  }
  return (
    <Wrapper useImage={useCampaignImage} imageUrl={campaignImage && campaignImage.url}>
      <Container>
        <Campaign
          id={id}
          resourceType={resourceType}
          {...props}
          style={{ marginTop: '0' }}
          formProps={{ onLoad }}
        />
      </Container>
    </Wrapper>
  );
};

export default createCard({
  name: 'CampaignCard',
  renderWith: withTheme(CampaignCardView),
});
