import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import ProgressBar from './ProgressBar';
import Text from './Text';
import { t, useTheme } from '../theme';
import CountUp from 'react-countup';

const Container = styled.div`
  color: ${t(_ => _.counterTextColor)};
  background-color: ${t(_ => _.counterBackgroundColor)};
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
  * {
    font-family: ${t(_ => _.headerFontFamily)};
  }
`;

const Description = styled(Text)`
  padding: 0 10px;
  min-width: 30%;
  width: auto;
  max-width: initial;
`;

const GoalText = styled.div`
  text-align: right;
  font-weight: 800;
  font-family: ${t(_ => _.headerFontFamily)};
  font-weight: bold;
  margin-top: 10px;
`;

export default function Counter({
  barColor,
  current = 0,
  description,
  goal,
  symbol = '',
  ...props
}) {
  const { counterBarColor } = useTheme();
  return (
    <Container {...fP(props)}>
      <TopContainer>
        <Current>
          {symbol}
          <CountUp end={current} duration={1.5} />
        </Current>
        <Description>{description}</Description>
      </TopContainer>
      {!goal ? null : (
        <>
          <ProgressBar
            barColor={barColor || counterBarColor}
            intent="primary"
            current={current}
            max={goal}
          />
          <GoalText>{symbol + goal}</GoalText>
        </>
      )}
    </Container>
  );
}
