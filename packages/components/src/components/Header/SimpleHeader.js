import React from 'react';
import { t } from '../../theme';
import { mediaUrl } from '@wingscms/sdk';
import styled from 'styled-components';

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

const TitleContainer = styled.div`
  padding: 0;
  position: relative;
  text-align: center;
  margin-top: ${t(_ => _.mediumSpacing)};
  @media screen and (min-width: 800px) {
    margin-top: ${t(_ => _.largeSpacing)};
  }
`;

const Title = styled.h1`
  font-family: ${t(_ => _.headerFontFamily)};
  letter-spacing: 1.5px;
  color: ${t(_ => _.textColor)};
  text-transform: ${t(_ => _.uppercaseTitles)};
  display: inline-block;
  font-size: 2rem;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto 0 auto;
  max-width: 90%;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 960px) {
    width: 920px;
  }
`;

export default ({ title, imageUrl, imageCaption } = {}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {imageUrl ? (
        <ImageContainer>
          <img src={mediaUrl(imageUrl, { width: 1160 })} alt={imageCaption} />
        </ImageContainer>
      ) : null}
    </TitleContainer>
  );
};
