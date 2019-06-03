import React from 'react';
import styled from 'styled-components';

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

const ShareImage = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 10px;
  margin: 0;
  margin-top: 40px;
  transform: translateY(-50%);
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
  }
  a:last-child & {
    margin-right: 20px;
  }
`;

export default (props) => {
  const {
    email,
    facebook,
    twitter,
    whatsapp,
    emailIcon,
    facebookIcon,
    twitterIcon,
    whatsappIcon,
  } = props;
  return (
    <ShareContainer {...props}>
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <ShareImage src={facebookIcon} alt="Deel op Facebook" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <ShareImage src={twitterIcon} alt="Deel op Twitter" />
        </a>
      )}
      {whatsapp && (
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <ShareImage src={whatsappIcon} alt="Deel via Whatsapp" />
        </a>
      )}
      {email && (
        <a href={email}>
          <ShareImage src={emailIcon} alt="Deel via e-mail" />
        </a>
      )}
    </ShareContainer>
  );
};
