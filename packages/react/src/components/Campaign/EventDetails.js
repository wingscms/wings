import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

const MetaContainer = styled.div`
  margin: 10px 0;
`;

const MetaName = styled.div`
  font-family: ${({ theme }) => theme.headerFontFamily};
  display: inline-block;
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  vertical-align: top;

  text-align: left;
`;

const MetaContent = styled.div`
  display: inline-block;
  width: 50%;
  font-size: 18px;
  font-weight: normal;
  vertical-align: top;
  p {
    margin: 0;
  }

  text-align: left;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.largeSpacing} auto;
  padding: 20px;
  background-color: #fff !important;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 40px;
    margin: ${({ theme }) => theme.mediumSpacing} auto ${({ theme }) => theme.mediumSpacing} auto;
  }
`;

export default ({
  title,
  location,
  eventStartLabel,
  eventEndLabel,
  eventLocationLabel,
  eventFeeLabel,
  eventStartTime,
  eventEndTime,
  eventFee,
}) => (
  <Wrapper>
    {title}
    <InfoContainer>
      {eventStartTime ? (
        <MetaContainer>
          <MetaName>{eventStartLabel}</MetaName>
          <MetaContent>{eventStartTime}</MetaContent>
        </MetaContainer>
      ) : null}
      {eventEndTime ? (
        <MetaContainer>
          <MetaName>{eventEndLabel}</MetaName>
          <MetaContent>{eventEndTime}</MetaContent>
        </MetaContainer>
      ) : null}
      {location ? (
        <MetaContainer>
          <MetaName>{eventLocationLabel}</MetaName>
          <MetaContent>
            {location.name ? <p>{location.name}</p> : null}
            {location.street ? <p>{location.street}</p> : null}
            {location.city ? <p>{location.city}</p> : null}
            {location.zip ? <p>{location.zip}</p> : null}
            {location.country ? <p>{location.country}</p> : null}
          </MetaContent>
        </MetaContainer>
      ) : null}
      {eventFee ? (
        <MetaContainer>
          <MetaName>{eventFeeLabel}</MetaName>
          <MetaContent>{eventFee}</MetaContent>
        </MetaContainer>
      ) : null}
    </InfoContainer>
  </Wrapper>
);
