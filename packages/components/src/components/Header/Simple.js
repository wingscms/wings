import React from 'react';
import { t } from '../../theme';
import { mediaUrl } from '@wingscms/sdk';
import _Heading from '../Heading';
import styled from '../../lib/styled';

const Heading = styled(_Heading)`
  text-align: center;
`;

const Container = styled.div`
  padding: 0;
  margin-top: ${t(_ => _.mediumSpacing)};
  @media screen and (min-width: 800px) {
    margin-top: ${t(_ => _.largeSpacing)};
  }
`;

const ImageContainer = styled.figure`
  margin: ${t(_ => _.mediumSpacing)} 0 0 0;
  width: 100%;
  @media screen and (min-width: 800px) {
    margin: ${t(_ => _.largeSpacing)} 0 0 50%;
    max-width: 1200px;
    width: 100vw;
    transform: translateX(-50%);
    padding: 0 20px;
  }
  img {
    width: 100%;
    display: block;
    margin: 0;
  }
`;

export default function Simple({ headerTitle, headerSubtitle, imageUrl, imageCaption } = {}) {
  return (
    <Container>
      <Heading rank={1} style={{ margin: '0 auto', width: '90%' }}>
        {headerTitle}
      </Heading>
      {!headerSubtitle ? null : (
        <Heading rank={2} style={{ margin: '0 auto', width: '90%' }}>
          {headerSubtitle}
        </Heading>
      )}
      {imageUrl ? (
        <ImageContainer>
          <img src={mediaUrl(imageUrl, { width: 1160 })} alt={imageCaption} />
        </ImageContainer>
      ) : null}
    </Container>
  );
}
