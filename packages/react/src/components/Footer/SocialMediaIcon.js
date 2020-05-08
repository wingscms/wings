import React from 'react';
import styled from 'styled-components';
import { Icon } from '@wingscms/components';

const IconContainer = styled.div`
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
        <IconContainer
          key={key}
          iconColor={iconColor || '#3b5998'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="facebook" />
          </a>
        </IconContainer>
      );
    case 'github':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#4078c0'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="github" />
          </a>
        </IconContainer>
      );
    case 'instagram':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#e95950'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="instagram" />
          </a>
        </IconContainer>
      );
    case 'linkedin':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#0077B5'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="linkedin" />
          </a>
        </IconContainer>
      );
    case 'pinterest':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#BD081C'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="pinterest" />
          </a>
        </IconContainer>
      );
    case 'reddit':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#ff4500'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="reddit" />
          </a>
        </IconContainer>
      );
    case 'rss':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#f26522'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="rss" />
          </a>
        </IconContainer>
      );
    case 'skype':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#00aff0'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="skype" />
          </a>
        </IconContainer>
      );
    case 'spotify':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#1db954'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="spotify" />
          </a>
        </IconContainer>
      );
    case 'twitch':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#6441a5'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="twitch" />
          </a>
        </IconContainer>
      );
    case 'twitter':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#1da1f2'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="twitter" />
          </a>
        </IconContainer>
      );
    case 'vimeo':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#1ab7ea'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="vimeo" />
          </a>
        </IconContainer>
      );
    case 'whatsapp':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#075e54'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="whatsapp" />
          </a>
        </IconContainer>
      );
    case 'youtube':
      return (
        <IconContainer
          key={key}
          iconColor={iconColor || '#ff0000'}
          backgroundColor={backgroundColor}
        >
          <a href={url}>
            <Icon icon="youtube" />
          </a>
        </IconContainer>
      );
    default:
      return <div />;
  }
};
