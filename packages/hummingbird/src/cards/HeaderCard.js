/* global document */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Fade from 'react-reveal/Fade';
import { createCard, slugify } from '@wingscms/react';
import wide from '../styles/wide';
import Intro from '../components/Intro';

const Container = styled.div`
  ${wide};
  background: ${({ theme }) => theme.primaryColor};
  margin-top: 80px;
  margin-bottom: 80px;
  .mobiledoc-content > div:first-child & {
    margin-top: 0 !important;
  }
  @media screen and (max-width: 800px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const IntroText = styled(Intro)`
  color: white;
`;

const Header = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 80px 10px;
  text-align: center;
  margin: 0 auto;
  * {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.darkHeadingColor};
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
  color: ${({ theme }) => theme.textColor};
  opacity: 0.3;
  font-size: 80px;
  font-weight: bold;
  line-height: 55px;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  @media screen and (min-width: 800px) {
    font-size: 110px;
  }
`;

const addParentClasses = () => {
  const headerDivs = document.getElementsByClassName('headerContainer');
  for (let i = 0; i < headerDivs.length; i += 1) {
    headerDivs[i].parentElement.classList.add('headerWrapper');
  }
};

class HeaderView extends Component {
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
  componentDidMount() {
    addParentClasses();
  }
  render() {
    const { title, intro, marker, ...props } = this.props;
    return (
      <Container className="headerContainer" id={slugify(title)}>
        <Header {...props}>
          <Fade bottom distance="20px">
            <Marker>{marker}</Marker>
          </Fade>
          <Fade bottom distance="20px" delay={100}>
            <Title>{title}</Title>
          </Fade>
          <Fade bottom distance="20px" delay={200}>
            <IntroText>{intro}</IntroText>
          </Fade>
        </Header>
      </Container>
    );
  }
}

export default createCard({
  name: 'HeaderCard',
  renderWith: withTheme(HeaderView),
});
