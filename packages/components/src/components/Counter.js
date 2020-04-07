import React from 'react';
import styled from '../lib/styled';
import CounterBar from './CounterBar';
import { t } from '../theme';
import CountUp from 'react-countup';

const Container = styled.div`
  color: ${t((_, { textColor }) => textColor || _.counterTextColor)};
  background-color: ${t((_, { backgroundColor }) => backgroundColor || _.counterBackgroundColor)};
  display: block;
  position: relative;
  width: 100%;
`;

const TopContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  min-height: 80px;
`;

const Current = styled.div`
  font-size: 44px;
  font-weight: 800;
  font-family: ${t(_ => _.headerFontFamily)};
  font-weight: bold;
  max-width: 70%;
  width: auto;
  display: block;
  line-height: 38px;
  text-align: right;
  padding-top: 2px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  padding: 0 10px;
  min-width: 30%;
  width: auto;
  max-width: initial;
  display: block;
`;

const GoalText = styled.div`
  text-align: right;
  font-weight: 800;
  font-family: ${t(_ => _.headerFontFamily)};
  font-weight: bold;
  margin-top: 10px;
`;

export default ({
  backgroundColor,
  barColor,
  current = 0,
  description,
  goal,
  goalText,
  symbol,
  textColor,
  ...props
}) => {
  return (
    <Container textColor={textColor} backgroundColor={backgroundColor} {...props}>
      <TopContainer>
        <Current>
          {symbol ? symbol : ''}
          <CountUp end={current} duration={1.5} />
        </Current>
        <Description>{description}</Description>
      </TopContainer>
      {!goal ? null : (
        <>
          <CounterBar barColor={barColor} intent="primary" current={current} max={goal} />
          <GoalText>{goalText}</GoalText>
        </>
      )}
    </Container>
  );
};
