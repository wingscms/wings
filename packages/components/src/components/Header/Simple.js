import React from 'react';
import { t } from '../../theme';
import { mediaUrl } from '@wingscms/sdk';
import _Heading from '../Heading';
import styled from 'styled-components';

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

export default function Simple({ title, subtitle, imageUrl, imageCaption } = {}) {
  return (
    <Container>
      <Heading rank={1} style={{ margin: '0 auto', width: '90%' }}>
        {title}
      </Heading>
      {!subtitle ? null : (
        <Heading rank={2} style={{ margin: '0 auto', width: '90%' }}>
          {subtitle}
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
