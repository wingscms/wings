import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Campaign from './Campaign';
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
export default class CampaignConfirmed extends Component {
  static Main = (props) => {
    const {
      pageContext: { shareUrls },
    } = props;

    return (
      <Campaign.Content {...props}>
        <FormattedMessage
          id="app.campaign.confirmed.title"
          description="Title of campaign submission success."
          defaultMessage="Hurray!"
          tagName={Campaign.Title}
        />
        <FormattedMessage
          id="app.campaign.confirmed.text"
          description="Text of campaign submission success."
          defaultMessage="Thanks to you, we are one step closer towards our goals."
          tagName={Text}
        />
        <ShareContainer>
          <FormattedMessage
            id="app.campaign.confirmed.shareTitle"
            description="Title above campaign share buttons."
            defaultMessage="Please share this petition with your friends and colleagues:"
            tagName={ShareTitle}
          />
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
      </Campaign.Content>
    );
  };
  static defaultProps = {
    children: [<Campaign.Navigation />, <CampaignConfirmed.Main />],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
