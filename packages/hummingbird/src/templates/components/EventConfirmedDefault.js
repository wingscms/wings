/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';

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
  height: 50px;
  width: 50px;
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
    margin: 15px auto;
  }
  @media screen and (max-width: 800px) {
    height: 40px;
    width: 40px;
    margin-right: 5px;
    img {
      height: 20px;
      margin: 10px auto;
    }
  }
`;

export default class ConfirmPage extends Component {
  state = {
    shareUrls: makeShareUrls(
      this.props.pageContext.event.platforms,
      this.props.location.href
        ? this.props.location.href
          .split('/')
          .slice(0, -1)
          .join('/')
        : '',
      this.props.pageContext.event.meta,
    ),
  };

  render() {
    const { shareUrls = {} } = this.state;
    const { event } = this.props.pageContext;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="event">
          <Navigation shareUrls={shareUrls} items={event.menu && event.menu.items} />
          <Wrapper backgroundImage={event.image ? event.image.url : ''}>
            <ContentContainer>
              <Title>Thank you!</Title>
              <p>We are one step closer to reaching our goals.</p>
              <ShareContainer>
                <div style={{ marginBottom: '10px' }}>Please share this event:</div>
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
