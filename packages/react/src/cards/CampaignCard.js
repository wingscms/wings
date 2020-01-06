import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from '../lib/styled';
import { wide } from '@wingscms/crane';
import Campaign from '../components/Campaign/Campaign';
import createCard from '../createCard';

const Wrapper = styled.div`
  ${wide};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  @media screen and (max-width: 800px) {
    margin-bottom: ${({ theme }) => theme.mediumSpacing};
  }
`;

const Image = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  ${({ imageUrl }) =>
    (imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
          min-height: 500px;
          max-height: 700px;
          margin-top: ${({ theme }) => theme.largeSpacing};
          margin-bottom: ${({ imageMargin }) => `-${imageMargin}px` || 0};
          padding-top: 80px;
          @media screen and (max-width: 1000px) {
            margin-top: ${({ theme }) => theme.mediumSpacing};
            min-height: 0;
            margin-bottom: 0;
            max-height: 0;
            height: auto;
            padding-top: 50%;
          }
        `
      : null)}
`;

export const CampaignCardView = ({ id, resourceType, ...props }) => {
  const imageRef = useRef(null);
  const [imageMargin, setImageMargin] = useState(0);
  useEffect(() => {
    const { offsetHeight } = imageRef.current;
    setImageMargin(offsetHeight / 5);
  });
  if (!id || !resourceType) {
    console.warn(
      '[hummingbird] CampaignCard does not reference an existing campaign',
    );
    return null;
  }
  return (
    <Campaign
      id={id}
      resourceType={resourceType}
      {...props}
      style={{ marginTop: '0' }}
      wrapElement={(element, campaign) => (
        <Wrapper>
          <Image
            ref={imageRef}
            imageUrl={campaign && campaign.image && campaign.image.url}
            imageMargin={imageMargin}
          />
          <Container>{element}</Container>
        </Wrapper>
      )}
    />
  );
};

export default createCard({
  name: 'CampaignCard',
  renderWith: CampaignCardView,
});
