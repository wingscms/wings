import React from 'react';
import styled from 'styled-components';
import { Icons } from '@wingscms/components';

const {
  Facebook,
  GitHub,
  GooglePlus,
  Instagram,
  LinkedIn,
  Pinterest,
  Reddit,
  Rss,
  Skype,
  Spotify,
  Twitch,
  Twitter,
  Vimeo,
  Whatsapp,
  YouTube,
} = Icons;

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

export default (name, url, iconColor, backgroundColor, key) => {
  switch (name) {
    case 'facebook':
      return (
        <Icon key={key} iconColor={iconColor || '#3b5998'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Facebook />
          </a>
        </Icon>
      );
    case 'github':
      return (
        <Icon key={key} iconColor={iconColor || '#4078c0'} backgroundColor={backgroundColor}>
          <a href={url}>
            <GitHub />
          </a>
        </Icon>
      );
    case 'googleplus':
      return (
        <Icon key={key} iconColor={iconColor || '#d34836'} backgroundColor={backgroundColor}>
          <a href={url}>
            <GooglePlus />
          </a>
        </Icon>
      );
    case 'instagram':
      return (
        <Icon key={key} iconColor={iconColor || '#e95950'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Instagram />
          </a>
        </Icon>
      );
    case 'linkedin':
      return (
        <Icon key={key} iconColor={iconColor || '#0077B5'} backgroundColor={backgroundColor}>
          <a href={url}>
            <LinkedIn />
          </a>
        </Icon>
      );
    case 'pinterest':
      return (
        <Icon key={key} iconColor={iconColor || '#BD081C'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Pinterest />
          </a>
        </Icon>
      );
    case 'reddit':
      return (
        <Icon key={key} iconColor={iconColor || '#ff4500'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Reddit />
          </a>
        </Icon>
      );
    case 'rss':
      return (
        <Icon key={key} iconColor={iconColor || '#f26522'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Rss />
          </a>
        </Icon>
      );
    case 'skype':
      return (
        <Icon key={key} iconColor={iconColor || '#00aff0'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Skype />
          </a>
        </Icon>
      );
    case 'spotify':
      return (
        <Icon key={key} iconColor={iconColor || '#1db954'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Spotify />
          </a>
        </Icon>
      );
    case 'twitch':
      return (
        <Icon key={key} iconColor={iconColor || '#6441a5'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Twitch />
          </a>
        </Icon>
      );
    case 'twitter':
      return (
        <Icon key={key} iconColor={iconColor || '#1da1f2'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Twitter />
          </a>
        </Icon>
      );
    case 'vimeo':
      return (
        <Icon key={key} iconColor={iconColor || '#1ab7ea'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Vimeo />
          </a>
        </Icon>
      );
    case 'whatsapp':
      return (
        <Icon key={key} iconColor={iconColor || '#075e54'} backgroundColor={backgroundColor}>
          <a href={url}>
            <Whatsapp />
          </a>
        </Icon>
      );
    case 'youtube':
      return (
        <Icon key={key} iconColor={iconColor || '#ff0000'} backgroundColor={backgroundColor}>
          <a href={url}>
            <YouTube />
          </a>
        </Icon>
      );
    default:
      return <div />;
  }
};
