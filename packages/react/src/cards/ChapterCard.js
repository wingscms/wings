import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../lib/styled';
import Fade from 'react-reveal/Fade';

import { wide } from '@wingscms/components';
import { slugify } from '../lib/utils';
import createCard from '../createCard';
import Intro from '../components/Intro';

const Container = styled.div`
  ${wide};
  background: ${({ theme }) => theme.chapterBackgroundColor};
  margin-top: ${({ theme }) => theme.largeSpacing};
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  &:first-child {
    margin-top: 0 !important;
  }
  @media screen and (max-width: 800px) {
    margin-top: ${({ theme }) => theme.mediumSpacing};
    margin-bottom: ${({ theme }) => theme.mediumSpacing};
  }
`;

const IntroText = styled(Intro)`
  color: ${({ theme }) => theme.chapterIntroColor};
  margin-bottom: 0;
`;

const Chapter = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.largeSpacing} 10px;
  text-align: center;
  margin: 0 auto;
  * {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    padding: ${({ theme }) => theme.mediumSpacing} 10px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.chapterItemColor};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  letter-spacing: 1.5px;
  font-size: 30px;
  line-height: 65px !important;
  margin: -70px 0 30px 0;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    line-height: 70px;
    margin: -85px 0 4rem;
  }
`;

const Marker = styled.span`
  color: ${({ theme }) => theme.chapterItemNumberColor};
  opacity: 0.3;
  font-size: 80px;
  font-weight: bold;
  line-height: 55px;
  font-family: ${({ theme }) => theme.headerFontFamily};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  @media screen and (min-width: 800px) {
    font-size: 110px;
  }
`;

class ChapterView extends Component {
  static propTypes = {
    title: PropTypes.node,
    intro: PropTypes.node,
    marker: PropTypes.node,
  };

  static defaultProps = {
    title: '',
    intro: '',
    marker: '',
  };

  render() {
    const { title, intro, marker, ...props } = this.props;
    return (
      <Container className="headerContainer" id={slugify(title)}>
        <Chapter {...props}>
          <Fade bottom distance="20px">
            <Marker>{marker}</Marker>
          </Fade>
          <Fade bottom distance="20px" delay={100}>
            <Title>{title}</Title>
          </Fade>
          <Fade bottom distance="20px" delay={200}>
            <IntroText>{intro}</IntroText>
          </Fade>
        </Chapter>
      </Container>
    );
  }
}

export default createCard({
  name: 'ChapterCard',
  renderWith: ChapterView,
});
