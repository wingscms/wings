import React from 'react';
import fP from 'filter-invalid-dom-props';
import { t } from '../theme';
import styled from '../lib/styled';
import Icon from './Icon';

const ShareImage = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 0;
  margin-top: 40px;
  margin-right: 15px;
  transform: translateY(-50%);
  svg {
    fill: ${t((_, { iconColor }) => iconColor || _.iconColor)};
    transition: 0.2s all ease-in-out;
  }
  &:hover,
  &:active {
    svg {
      fill: ${t((_, { iconHoverColor }) => iconHoverColor || _.iconHoverColor)};
    }
  }
`;

const Platform = {
  EMAIL: 'email',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  WHATSAPP: 'whatsapp',
};

const Icons = {
  [Platform.EMAIL]: Icon.Email,
  [Platform.FACEBOOK]: Icon.Facebook,
  [Platform.TWITTER]: Icon.Twitter,
  [Platform.WHATSAPP]: Icon.WhatsApp,
};

const ShareButtons = ({ items, ...props }) => (
  <div {...fP(props)}>
    {items.map(({ platform, url, icon }, idx) => {
      const ItemIcon = icon || Icons[platform];
      return (
        <a href={url} key={idx}>
          <ShareImage>
            <ItemIcon />
          </ShareImage>
        </a>
      );
    })}
  </div>
);

ShareButtons.Platform = Platform;

export default ShareButtons;
