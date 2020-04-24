import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mediaUrl } from '@wingscms/sdk';
import { getViewportDimensions } from '../../../lib/utils';
import { ArrowDown } from '../../Icon';
import Title from './Title';

import { t } from '../../../theme';

const Container = styled.header`
  width: 100%;
  height: 100%;
  background-color: ${t(_ => _.landingSectionBackgroundColor)};
  position: relative;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
  @media screen and (max-width: 800px) {
    height: calc(100vh - 60px);
  }
`;

const BackgroundImageContainerOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.3) 90%);
`;

const backgroundImage = props => {
  const { height = 1136, width = 640 } = getViewportDimensions();
  return mediaUrl(props.backgroundImage, width > height ? { width } : { height });
};

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("${backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.backgroundPosition};
  animation: 25s ease-out zoom forwards;
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const TitleContainer = styled.div`
  padding: 0 10px;
  position: relative;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 20px 0;
  }
`;

const ArrowContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin: 30px 0;
  svg {
    height: 25px;
    margin: 10px auto;
    g {
      fill: ${t(_ => _.landingSectionTitleColor)};
    }
  }
  @media screen and (max-width: 800px) {
    svg {
      margin: 10px auto 40px auto;
    }
  }
`;
export default ({ title, imageUrl, titleAttribute }) => {
  const [scrollY, setScrollY] = useState(0);
  const updateScroll = () => requestAnimationFrame(setScrollY(window.scrollY));
  // TODO: fix scroll effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => updateScroll);
      return () => window.removeEventListener('scroll', () => updateScroll);
    }
  }, []);

  return (
    <Container id="landing-section" title={titleAttribute}>
      <BackgroundImageContainerOuter style={{ marginTop: scrollY > 84 ? scrollY / 2 - 84 / 2 : 0 }}>
        <BackgroundImageContainer backgroundImage={imageUrl} backgroundPosition="center center" />
        <BackgroundOverlay />
      </BackgroundImageContainerOuter>
      <ContentContainer>
        <TitleContainer>
          <Title>
            <span>{title}</span>
          </Title>
        </TitleContainer>
        <ArrowContainer>
          <ArrowDown />
        </ArrowContainer>
      </ContentContainer>
    </Container>
  );
};
