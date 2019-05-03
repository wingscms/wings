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

export default ({ fee, location, schedule }) => {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  return (
    <InfoContainer>
      {schedule.start ? (
        <MetaContainer>
          <MetaName>Start</MetaName>
          <MetaContent>
            {/* eslint-disable-next-line */}
            {start.getDate()}-{start.getMonth() + 1}-{start.getFullYear()} {start.getUTCHours() + 1}
            :{formatMinutes(start.getUTCMinutes())}
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
  );
};
