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

const getCurrencySymbol = (currencyCode) => {
  switch (currencyCode) {
    case 'EUR':
    default:
      return '€';
  }
};

const formatMinutes = m => (m < 10 ? `0${m}` : m);

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff !important;
  border-radius: 4px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  @media screen and (min-width: 800px) {
    padding: 40px;
  }
`;

export default ({ title, fee, location, schedule }) => {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  return (
    <Wrapper>
      {title}
      <InfoContainer>
        {schedule.start ? (
          <MetaContainer>
            <MetaName>Start</MetaName>
            <MetaContent>
              {/* eslint-disable-next-line */}
              {start.getDate()}-{start.getMonth() + 1}-{start.getFullYear()}{' '}
              {start.getUTCHours() + 1}:{formatMinutes(start.getUTCMinutes())}
            </MetaContent>
          </MetaContainer>
        ) : null}
        {schedule.end ? (
          <MetaContainer>
            <MetaName>End</MetaName>
            <MetaContent>
              {/* eslint-disable-next-line */}
              {end.getDate()}-{end.getMonth() + 1}-{end.getFullYear()} {end.getUTCHours() + 1}:
              {formatMinutes(end.getUTCMinutes())}
            </MetaContent>
          </MetaContainer>
        ) : null}
        {location ? (
          <MetaContainer>
            <MetaName>Location</MetaName>
            <MetaContent>
              {location.name ? <p>{location.name}</p> : null}
              {location.street ? <p>{location.street}</p> : null}
              {location.city ? <p>{location.city}</p> : null}
              {location.zip ? <p>{location.zip}</p> : null}
              {location.country ? <p>{location.country}</p> : null}
            </MetaContent>
          </MetaContainer>
        ) : null}
        {fee ? (
          <MetaContainer>
            <MetaName>Price</MetaName>
            <MetaContent>
              {getCurrencySymbol(fee.currencyCode)}
              {fee.amount}
            </MetaContent>
          </MetaContainer>
        ) : null}
      </InfoContainer>
    </Wrapper>
  );
};
