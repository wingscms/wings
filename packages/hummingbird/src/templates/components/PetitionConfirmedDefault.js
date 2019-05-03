/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@hummingbird/design';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { ContentContainer, Title, Wrapper } from '../../components/Petition/ConfirmationPages';
import Layout from '../../components/Layout';

import { makeShareUrls } from '../../../lib/utils';

// images
import facebookLogo from '../../img/facebook.svg';
import twitterLogo from '../../img/twitter.svg';
import whatsappLogo from '../../img/whatsapp.svg';
import emailIcon from '../../img/email.svg';

const ShareContainer = styled.div`
  padding-top: 20px;
  position: relative;
  display: block;
  text-align: center;
  width: 100%;
`;

const ShareButton = styled.a`
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  position: relative;
  margin: 0 5px;
  transition: all 0.1s linear;
  &:hover {
    background-color: #fff;
  }
  img {
    display: block;
    height: 20px;
    margin: 10px auto;
  }
  @media screen and (min-width: 800px) {
    height: 50px;
    width: 50px;
    img {
      margin: 15px auto;
    }
  }
`;
const Text = styled.p`
  font-size: 18px;
  @media screen and (min-width: 800px) {
    font-size: 24px;
  }
`;
const ShareTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 0.4em;
  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
`;

export default class ConfirmPage extends Component {
  state = {
    shareUrls: makeShareUrls(
      this.props.pageContext.petition.platforms,
      this.props.location.href
        ? this.props.location.href
          .split('/')
          .slice(0, -1)
          .join('/')
        : '',
      this.props.pageContext.petition.meta,
    ),
  };

  render() {
    const { shareUrls = {} } = this.state;
    const { petition } = this.props.pageContext;
    const metaObj = petition.meta;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="petition">
          <Navigation shareUrls={shareUrls} items={petition.menu && petition.menu.items} />
          <Wrapper backgroundImage={petition.image ? petition.image.url : ''}>
            <ContentContainer>
              <Title>{metaObj.confirmedTitle || 'Bedankt!'}</Title>
              <Text>
                {metaObj.confirmedText ||
                  'We zijn weer wat dichterbij het behalen van onze doelen.'}
              </Text>
              <ShareContainer>
                <ShareTitle>
                  Deel alsjeblieft deze petitie met je vrienden, familie en buren:
                </ShareTitle>
                <ShareButton href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Deel op Facebook" />
                </ShareButton>
                <ShareButton href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Deel op Twitter" />
                </ShareButton>
                <ShareButton href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
                  <img src={whatsappLogo} alt="Deel op WhatsApp" />
                </ShareButton>
                <ShareButton href={shareUrls.email}>
                  <img src={emailIcon} alt="Deel via e-mail" />
                </ShareButton>
              </ShareContainer>
            </ContentContainer>
          </Wrapper>
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
