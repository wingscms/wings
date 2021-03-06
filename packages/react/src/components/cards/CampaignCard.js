import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from '../../lib/styled';
import { _WIDE, Surface as _Surface } from '@wingscms/components';
import Campaign from '../Campaign/Campaign';
import createCard from '../../createCard';
import { t } from '../../theme';

const Wrapper = styled.div`
  ${_WIDE};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${t(_ => _.largeSpacing)};
  @media screen and (max-width: 800px) {
    margin-bottom: ${t(_ => _.mediumSpacing)};
  }
  ${({ imageUrl }) =>
    imageUrl
      ? css`
          margin-top: -${t(_ => _.largeSpacing)};
          @media screen and (max-width: 800px) {
            margin-bottom: -${t(_ => _.mediumSpacing)};
          }
        `
      : null}
`;

const ImageSurface = styled(_Surface)`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  ${({ imageUrl }) =>
    imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: 100% auto;
          background-repeat: no-repeat;
          min-height: 500px;
          max-height: 700px;
          margin-bottom: ${({ imageMargin }) => `-${imageMargin}px` || 0};
          padding-top: 80px;
          @media screen and (max-width: 1000px) {
            min-height: 0;
            margin-bottom: 0;
            max-height: 0;
            height: auto;
            padding-top: 50%;
          }
        `
      : null}
`;

export const CampaignCardView = ({ id, resourceType, ...props }) => {
  const imageRef = useRef(null);
  const [imageMargin, setImageMargin] = useState(0);
  useEffect(() => {
    if (!imageRef?.current) return;
    const { offsetHeight } = imageRef?.current;
    setImageMargin(offsetHeight / 5);
  });
  if (!id || !resourceType) {
    console.warn('[hummingbird] CampaignCard does not reference an existing campaign'); // eslint-disable-line no-console
    return null;
  }
  return (
    <Campaign
      id={id}
      headingRank={3}
      resourceType={resourceType}
      {...props}
      wrapElement={(element, campaign) => {
        const imageUrl = campaign && campaign.image && campaign.image.url;
        return (
          <Wrapper>
            <ImageSurface
              elevation={1}
              ref={imageRef}
              imageUrl={imageUrl}
              imageMargin={imageMargin}
            />
            <Container imageUrl={imageUrl}>{element}</Container>
          </Wrapper>
        );
      }}
    />
  );
};

export default createCard({
  name: 'CampaignCard',
  renderWith: CampaignCardView,
});
