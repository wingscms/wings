import React from 'react';
import { Surface as _Surface } from '@wingscms/components';

import styled from '../../lib/styled';
import { t } from '../../theme';

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
  font-family: ${t(_ => _.headerFontFamily)};
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
  text-transform: ${t(_ => _.titleTransform)};
  display: inline-block;
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  vertical-align: top;
  text-align: left;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const MetaContent = styled.div`
  font-family: ${t(_ => _.textFontFamily)};
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
  display: inline-block;
  width: 50%;
  font-size: 18px;
  font-weight: normal;
  vertical-align: top;
  p {
    margin: 0;
  }
  text-align: left;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Surface = styled(_Surface)`
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: ${t(_ => _.shadow)};
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 40px;
    margin: 0 auto;
  }
`;

export default function EventDetails({
  title,
  location,
  eventStartLabel,
  eventEndLabel,
  eventLocationLabel,
  eventFeeLabel,
  eventStartTime,
  eventEndTime,
  eventFee,
}) {
  return (
    <Surface>
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
    </Surface>
  );
}
