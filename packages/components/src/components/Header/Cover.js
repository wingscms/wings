import React, { useState } from 'react';
import fP from 'filter-invalid-dom-props';
import { mediaUrl } from '@wingscms/sdk';
import styled, { css } from '../../lib/styled';
import { getViewportDimensions } from '../../lib/utils';
import useWindow from '../../hooks/useWindow';
import Icon from '../Icon';
import Heading from '../Heading';
import { t } from '../../theme';

const Title = styled(Heading)`
  color: ${t(_ => _.landingSectionTitleColor)};
  text-align: center;
  margin: 0 auto;
  max-width: 95%;
  position: relative;
  @media screen and (min-width: 800px) {
    max-width: 1000px;
  }
  ${t(({ landingSectionTitleBackgroundColor: v }) => {
    if (!v) return;
    return css`
      line-height: 1.4;
      span {
        background: ${v};
        line-height: 1.4;
        padding: 0 0.25em;
        box-decoration-break: clone;
      }
    `;
  })}
`;

const Container = styled.header`
  width: 100%;
  height: 100vh;
  background-color: ${t(_ => _.landingSectionBackgroundColor)};
  position: relative;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
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
  background-image: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 60%,
    ${t(_ => _.landingSectionGradientColor)} 100%
  );
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
      fill: ${t(_ => _.landingSectionArrowColor)};
    }
  }
  @media screen and (max-width: 800px) {
    svg {
      margin: 10px auto 40px auto;
    }
  }
`;

export default function Cover({ headerTitle, headerSubtitle, imageUrl, ...props }) {
  const [scrollY, setScrollY] = useState(0);
  const updateScroll = () => requestAnimationFrame(setScrollY(window.scrollY));
  useWindow(() => {
    window.addEventListener('scroll', () => updateScroll);
    return () => window.removeEventListener('scroll', () => updateScroll);
  });
  return (
    <Container {...fP(props)}>
      <BackgroundImageContainerOuter style={{ marginTop: scrollY > 84 ? scrollY / 2 - 84 / 2 : 0 }}>
        <BackgroundImageContainer backgroundImage={imageUrl} backgroundPosition="center center" />
        <BackgroundOverlay />
      </BackgroundImageContainerOuter>
      <ContentContainer>
        <TitleContainer>
          <Title rank={1}>
            <span>{headerTitle}</span>
          </Title>
        </TitleContainer>
        {!headerSubtitle ? null : (
          <TitleContainer>
            <Title rank={2}>
              <span>{headerSubtitle}</span>
            </Title>
          </TitleContainer>
        )}
        <ArrowContainer>
          <Icon icon="arrow-down" />
        </ArrowContainer>
      </ContentContainer>
    </Container>
  );
}
