import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import qs from 'qs';
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

const FundraiserText = ({ status }) => {
  switch (status) {
    case 'success':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.successTitle"
            description="Title of fundraiser payment success."
            defaultMessage="Hurray!"
            tagName={Campaign.Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.successText"
            description="Text of fundraiser payment success."
            defaultMessage="Thank you. The payment was successful"
            tagName={Text}
          />
        </React.Fragment>
      );
    case 'pending':
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.pendingTitle"
            description="Title of fundraiser payment pending."
            defaultMessage="Thanks for your contribution"
            tagName={Campaign.Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.pendingText"
            description="Text of fundraiser payment pending."
            defaultMessage="Thanks for your contribution. Your payment is still processing. Please check with your bank to verify your payment."
            tagName={Text}
          />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.failedTitle"
            description="Title of fundraiser payment failure."
            defaultMessage="Oh no!"
            tagName={Campaign.Title}
          />
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.fundraiserMain.failedText"
            description="Text of fundraiser payment failure."
            defaultMessage="Thanks for your interest. It seems like something went wrong with the payment. Please check with your bank and try again."
            tagName={Text}
          />
        </React.Fragment>
      );
  }
};

export default class CampaignConfirmed extends Component {
  static Main = (props) => {
    const {
      pageContext: {
        shareUrls,
        node: { resourceType },
      },
      location,
    } = props;
    return (
      <Campaign.Content {...props}>
        {resourceType === 'node.fundraiser' ? (
          <FundraiserText status={qs.parse(location.search.replace('?', '')).transaction_status} />
        ) : (
          <React.Fragment>
            <FormattedMessage
              id="hummingbird.CampaignConfirmed.main.title"
              description="Title of campaign submission success."
              defaultMessage="Hurray!"
              tagName={Campaign.Title}
            />
            <FormattedMessage
              id="hummingbird.CampaignConfirmed.main.text"
              description="Text of campaign submission success."
              defaultMessage="Thanks to you, we are one step closer towards our goals."
              tagName={Text}
            />
          </React.Fragment>
        )}
        <ShareContainer>
          <FormattedMessage
            id="hummingbird.CampaignConfirmed.share.title"
            description="Title above campaign share buttons."
            defaultMessage="Please share this campaign with your friends and colleagues:"
            tagName={ShareTitle}
          />
          <ShareButton href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Share on Facebook" />
          </ShareButton>
          <ShareButton href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Share on Twitter" />
          </ShareButton>
          <ShareButton href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="Share via WhatsApp" />
          </ShareButton>
          <ShareButton href={shareUrls.email}>
            <img src={emailIcon} alt="Share via email" />
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
