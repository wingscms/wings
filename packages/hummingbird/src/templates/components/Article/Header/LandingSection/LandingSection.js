import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll-to-element';
import { mediaUrl } from '@wingscms/sdk';
import { getViewportDimensions } from '../../../../../../lib/utils';
import { DEFAULT_VIEWPORT_HEIGHT, DEFAULT_VIEWPORT_WIDTH } from '../../../../../../lib/constants';
import widont from 'widont';
import Title from './Title';

import downArrowImage from '../../../../../img/arrow-down.svg';

const Container = styled.header`
  cursor: pointer;
  width: 100vw;
  height: calc(100vh - 84px);
  background-color: ${({ theme }) => theme.landingSectionBackgroundColor};
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
  const {
    height = DEFAULT_VIEWPORT_HEIGHT,
    width = DEFAULT_VIEWPORT_WIDTH,
  } = getViewportDimensions();
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
  @media screen and (min-width: 800px) {
  }
`;

const Arrow = styled.img`
  margin: 10px auto;
  @media screen and (max-width: 800px) {
    height: 25px;
    margin: 10px auto 40px auto;
  }
`;
export default class LandingSection extends Component {
  state = {
    scrollY: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => this.updatePercentage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.updatePercentage);
  }

  updatePercentage = () => requestAnimationFrame(() => this.setState({ scrollY: window.scrollY }));
  render() {
    if (typeof window === 'undefined') return <div />;
    const { article: { title, image = {} } = {}, titleAttribute } = this.props;
    const { scrollY } = this.state;

    const backgroundImage = (image && image.url) || '';
    return (
      <div>
        <Scroll type="id" element="article-start">
          <Container id="landing-section" title={titleAttribute}>
            <BackgroundImageContainerOuter
              style={{ marginTop: scrollY > 84 ? scrollY / 2 - 84 / 2 : 0 }}
            >
              <BackgroundImageContainer
                backgroundImage={backgroundImage}
                backgroundPosition="center center"
              />
              <BackgroundOverlay />
            </BackgroundImageContainerOuter>
            <ContentContainer>
              <TitleContainer>
                <Title>
                  <span>{widont(title)}</span>
                </Title>
              </TitleContainer>
              <ArrowContainer>
                <Arrow src={downArrowImage} />
              </ArrowContainer>
            </ContentContainer>
          </Container>
        </Scroll>
      </div>
    );
  }
}
