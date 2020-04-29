import React from 'react';
import fP from 'filter-invalid-dom-props';
import { t } from '../theme';
import styled from '../lib/styled';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ShareImage = styled.div`
  display: block;
  margin: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-right: ${({ spaceBetweenItems }) => spaceBetweenItems}px;
  padding: ${({ itemPadding }) => itemPadding}px;
  border-radius: ${({ itemBorderRadius }) => itemBorderRadius}px;
  background-color: ${t((_, { itemBackgroundColor }) => itemBackgroundColor || _.primaryColor)};
  transition: 0.2s all ease-in-out;
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    fill: ${t((_, { iconColor }) => iconColor || _.iconColor)};
    transition: 0.2s all ease-in-out;
  }
  &:hover,
  &:active {
    background-color: ${t(
      (_, { itemBackgroundHoverColor }) => itemBackgroundHoverColor || _.secondaryColor,
    )};
    svg {
      fill: ${t((_, { iconHoverColor }) => iconHoverColor || _.iconColor)};
    }
  }
`;

const Platform = {
  EMAIL: 'email',
  FACEBOOK: 'facebook',
  GITHUB: 'github',
  INSTAGRAM: 'instagram',
  LINKEDIN: 'linkedin',
  PINTEREST: 'pinterest',
  REDDIT: 'reddit',
  RSS: 'rss',
  SKYPE: 'skype',
  SPOTIFY: 'spotify',
  TWITTER: 'twitter',
  TWITCH: 'twitch',
  VIMEO: 'vimeo',
  WHATSAPP: 'whatsapp',
  YOUTUBE: 'youetube',
};

const Icons = {
  [Platform.EMAIL]: Icon.Email,
  [Platform.FACEBOOK]: Icon.Facebook,
  [Platform.GITHUB]: Icon.Github,
  [Platform.INSTAGRAM]: Icon.Instagram,
  [Platform.LINKEDIN]: Icon.LinkedIn,
  [Platform.PINTEREST]: Icon.Pinterest,
  [Platform.REDDIT]: Icon.Reddit,
  [Platform.RSS]: Icon.RSS,
  [Platform.SKYPE]: Icon.Skype,
  [Platform.SPOTIFY]: Icon.Spotify,
  [Platform.TWITTER]: Icon.Twitter,
  [Platform.TWITCH]: Icon.Twitch,
  [Platform.VIMEO]: Icon.Vimeo,
  [Platform.WHATSAPP]: Icon.WhatsApp,
  [Platform.YOUTUBE]: Icon.YouTube,
};

const ShareButtons = ({
  iconColor,
  iconHoverColor,
  size = 40,
  spaceBetweenItems = 10,
  itemBackgroundColor,
  itemBackgroundHoverColor,
  itemBorderRadius = 4,
  itemPadding = 8,
  items,
  ...props
}) => (
  <Container {...fP(props)}>
    {items.map(({ platform, url, linkProps, icon }, idx) => {
      const ItemIcon = icon || Icons[platform];
      return (
        <a href={url} key={idx} {...fP(linkProps)}>
          <ShareImage
            iconColor={iconColor}
            iconHoverColor={iconHoverColor}
            itemBackgroundColor={itemBackgroundColor}
            itemBackgroundColor={itemBackgroundHoverColor}
            itemBorderRadius={itemBorderRadius}
            itemPadding={itemPadding}
            size={size}
            spaceBetweenItems={idx < items.length ? spaceBetweenItems : 0}
          >
            <ItemIcon />
          </ShareImage>
        </a>
      );
    })}
  </Container>
);

ShareButtons.Platform = Platform;

export default ShareButtons;
