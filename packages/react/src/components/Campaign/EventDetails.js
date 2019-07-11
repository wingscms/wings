import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div``;

const MetaContainer = styled.div`
  margin: 10px 0;
`;

const MetaName = styled.div`
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  display: inline-block;
  width: 50%;
  font-size: 18px;
  font-weight: 800;
  vertical-align: top;
`;

const MetaContent = styled.div`
  display: inline-block;
  width: 50%;
  font-size: 18px;
  p {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff !important;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  text-align: center;
  @media screen and (min-width: 800px) {
    padding: 40px;
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
