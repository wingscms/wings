/* global window */
import React, { Component } from 'react';
import { mediaUrl } from '@wingscms/sdk';
import styled from 'styled-components';
import widont from 'widont';

const ImageContainer = styled.figure`
  margin: ${({ theme }) => theme.mediumSpacing} 0 0 0;
  width: 100%;
  @media screen and (min-width: 800px) {
    margin: ${({ theme }) => theme.largeSpacing} 0 0 50%;
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
  padding: 20px 0 0;
  position: relative;
  text-align: center;
  margin-top: 30px;
  @media screen and (min-width: 800px) {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto 0 auto;
  max-width: 90%;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media screen and (min-width: 960px) {
    width: 920px;
  }
`;

export default class Header extends Component {
  render() {
    const { article } = this.props;
    const title = widont(article.title);
    const image = (article && article.image && article.image.url) || '';
    return (
      <TitleContainer>
        <Title>{title}</Title>
        {image ? (
          <ImageContainer>
            <img src={mediaUrl(image, { width: 1160 })} alt={image.caption} />
          </ImageContainer>
        ) : null}
      </TitleContainer>
    );
  }
}
