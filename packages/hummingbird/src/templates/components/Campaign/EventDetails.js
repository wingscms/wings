import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';

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
            <MetaName>
              <FormattedMessage
                id="hummingbird.Campaign.eventStart.label"
                description="Label for Event Start date"
                defaultMessage="Start"
              />
            </MetaName>
            <MetaContent>
              <FormattedDate value={start} /> <FormattedTime value={start} />
            </MetaContent>
          </MetaContainer>
        ) : null}
        {schedule.end ? (
          <MetaContainer>
            <MetaName>
              <FormattedMessage
                id="hummingbird.Campaign.eventEnd.label"
                description="Label for Event End date"
                defaultMessage="End"
              />
            </MetaName>
            <MetaContent>
              <FormattedDate value={end} /> <FormattedTime value={end} />
            </MetaContent>
          </MetaContainer>
        ) : null}
        {location ? (
          <MetaContainer>
            <MetaName>
              <FormattedMessage
                id="hummingbird.Campaign.eventLocation.label"
                description="Label for Event Location"
                defaultMessage="Location"
              />
            </MetaName>
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
            <MetaName>
              <FormattedMessage
                id="hummingbird.Campaign.eventFee.label"
                description="Label for Event Fee"
                defaultMessage="Price"
              />
            </MetaName>
            <MetaContent>
              <FormattedNumber
                value={fee.amount}
                currency={fee.currencyCode}
                currencyDisplay="symbol"
                style="currency" // eslint-disable-line react/style-prop-object
              />
            </MetaContent>
          </MetaContainer>
        ) : null}
      </InfoContainer>
    </Wrapper>
  );
};
