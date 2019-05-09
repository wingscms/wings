import React from 'react';
import styled from 'styled-components';
import { FlexGrid } from '@wingscms/crane';
import Button from '../../../Button';
import { Location } from '../../../../img/svg';

const defaultMonths = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const EventWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`;

const DateWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 20px;
  border-radius: 4px 4px 0 0;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  text-align: center;
`;

const DateHalf = styled.div`
  display: inline-block;
  height: 100%;
  text-align: left;
`;

const Day = styled.div`
  font-size: 3.5em;
  line-height: 1em;
  padding-right: 10px;
  color: ${({ theme }) => theme.secondaryColor};
`;

const LocationWrapper = styled.div`
  font-weight: normal;
  font-size: 0.8em;
`;

const LocationIcon = styled(Location)`
  height: 1.3em;
  margin-right: 10px;
  margin-top: -2px;
  display: inline;
  vertical-align: middle;
  path {
    fill: ${({ theme }) => theme.secondaryColor};
  }
`;

const InfoWrapper = styled.div`
  border-radius: 0 0 4px 4px;
  padding: 20px;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.8em;
  margin-bottom: 0;
  & + button,
  & + a {
    margin-top: 20px;
  }
`;

export default (props) => {
  console.log(props);
  const { items, months = defaultMonths } = props;
  return (
    <FlexGrid
      divisions={2}
      margins={10}
      alignItems="stretch"
      style={{
        marginLeft: '-10px',
        marginTop: '10px',
        marginBottom: '10px',
        width: 'calc(100% + 20px)',
      }}
    >
      {items
        .map(x => ({ ...x, date: new Date(x.date) }))
        .map(x => (
          <EventWrapper>
            <DateWrapper>
              <DateHalf>
                <Day>{x.date.getDate()}</Day>
              </DateHalf>
              <DateHalf style={{ lineHeight: '1.5em' }}>
                {months[x.date.getMonth()]}
                <br />
                {x.date.getFullYear()}
              </DateHalf>
              <br />
              <LocationWrapper>
                <LocationIcon />
                {x.location}
              </LocationWrapper>
            </DateWrapper>
            <InfoWrapper>
              {x.title && <Title>{x.title}</Title>}
              {x.description && <Description>{x.description}</Description>}
              {x.link && (
                <Button size="small" as="a" href={x.link.url}>
                  {x.link.text}
                </Button>
              )}
            </InfoWrapper>
          </EventWrapper>
        ))}
    </FlexGrid>
  );
};
