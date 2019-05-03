import React from 'react';
import styled from 'styled-components';

import {
  Facebook,
  Github,
  Googleplus,
  Instagram,
  Linkedin,
  Pinterest,
  Reddit,
  Rss,
  Skype,
  Spotify,
  Twitch,
  Twitter,
  Vimeo,
  Whatsapp,
  Youtube,
} from '../../img/svg/social';

const Icon = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  opacity: 1;
  position: relative;
  transition: all 0.1s linear;
  &:hover {
    opacity: 0.8;
  }
  > a > svg {
    width: 100%;
    height: 100%;
    path,
    polygon,
    circle,
    rect {
      fill: ${({ iconColor }) => iconColor};
    }
  }
`;

export default (name, url, iconColor, backgroundColor) => {
  switch (name) {
    case 'facebook':
      return (
        <Icon iconColor={iconColor || '#3b5998'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Facebook />
          </a>
        </Icon>
      );
    case 'github':
      return (
        <Icon iconColor={iconColor || '#4078c0'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Github />
          </a>
        </Icon>
      );
    case 'googleplus':
      return (
        <Icon iconColor={iconColor || '#d34836'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Googleplus />
          </a>
        </Icon>
      );
    case 'instagram':
      return (
        <Icon iconColor={iconColor || '#e95950'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Instagram />
          </a>
        </Icon>
      );
    case 'linkedin':
      return (
        <Icon iconColor={iconColor || '#0077B5'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Linkedin />
          </a>
        </Icon>
      );
    case 'pinterest':
      return (
        <Icon iconColor={iconColor || '#BD081C'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Pinterest />
          </a>
        </Icon>
      );
    case 'reddit':
      return (
        <Icon iconColor={iconColor || '#ff4500'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Reddit />
          </a>
        </Icon>
      );
    case 'rss':
      return (
        <Icon iconColor={iconColor || '#f26522'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Rss />
          </a>
        </Icon>
      );
    case 'skype':
      return (
        <Icon iconColor={iconColor || '#00aff0'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Skype />
          </a>
        </Icon>
      );
    case 'spotify':
      return (
        <Icon iconColor={iconColor || '#1db954'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Spotify />
          </a>
        </Icon>
      );
    case 'twitch':
      return (
        <Icon iconColor={iconColor || '#6441a5'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Twitch />
          </a>
        </Icon>
      );
    case 'twitter':
      return (
        <Icon iconColor={iconColor || '#1da1f2'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Twitter />
          </a>
        </Icon>
      );
    case 'vimeo':
      return (
        <Icon iconColor={iconColor || '#1ab7ea'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Vimeo />
          </a>
        </Icon>
      );
    case 'whatsapp':
      return (
        <Icon iconColor={iconColor || '#075e54'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Whatsapp />
          </a>
        </Icon>
      );
    case 'youtube':
      return (
        <Icon iconColor={iconColor || '#ff0000'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Youtube />
          </a>
        </Icon>
      );
    default:
      return <div />;
  }
};
