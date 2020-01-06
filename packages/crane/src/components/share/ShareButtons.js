import React from 'react';
import styled from '../../lib/styled';
import Icons from '../../img/svg/icons';

const ShareContainer = styled.div`
  display: inline-block;
  float: right;
  height: 100%;
  > p {
    font-size: 15px;
    color: ${({ theme }) => theme.primaryColor};
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ShareImage = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 0;
  margin-top: 40px;
  margin-right: 15px;
  transform: translateY(-50%);
  svg {
    fill: ${({ color }) => color || '#000'};
  }
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

export default ({ color, email, facebook, twitter, whatsapp, ...props }) => (
  <ShareContainer {...props}>
    {facebook && (
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <ShareImage color={color}>
          <Icons.Facebook />
        </ShareImage>
      </a>
    )}
    {twitter && (
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <ShareImage color={color}>
          <Icons.Twitter />
        </ShareImage>
      </a>
    )}
    {whatsapp && (
      <a href={whatsapp} target="_blank" rel="noopener noreferrer">
        <ShareImage color={color}>
          <Icons.Whatsapp />
        </ShareImage>
      </a>
    )}
    {email && (
      <a href={email}>
        <ShareImage color={color}>
          <Icons.Email />
        </ShareImage>
      </a>
    )}
  </ShareContainer>
);
