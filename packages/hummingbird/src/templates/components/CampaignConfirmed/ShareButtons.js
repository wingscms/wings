import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { getContrastColor, Icons } from '@wingscms/crane';

const { Facebook, Twitter, Whatsapp, Email } = Icons;

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
  transition: all 0.2s linear;
  padding: 12px;
  svg {
    display: block;
    fill: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor,
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    svg {
      fill: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.secondaryColor,
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
    }
  }

  @media screen and (min-width: 800px) {
    height: 50px;
    width: 50px;
    img {
      margin: 15px auto;
    }
  }
`;

const ShareTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 0.4em;
  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
`;

export default (props) => {
  const {
    pageContext: { shareUrls },
  } = props;
  return (
    <ShareContainer>
      <FormattedMessage
        id="hummingbird.CampaignConfirmed.share.title"
        description="Title above campaign share buttons."
        defaultMessage="Please share this campaign with your friends and colleagues:"
        tagName={ShareTitle}
      />
      <ShareButton href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
        <Facebook />
      </ShareButton>
      <ShareButton href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
        <Twitter />
      </ShareButton>
      <ShareButton href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
        <Whatsapp />
      </ShareButton>
      <ShareButton href={shareUrls.email}>
        <Email />
      </ShareButton>
    </ShareContainer>
  );
};
