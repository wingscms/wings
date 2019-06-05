import React, { Component } from 'react';
import styled from 'styled-components';
import createFormatter from 'format-number';
import CountUp from 'react-countup';

const format = createFormatter({ integerSeparator: '.' });

const Container = styled.div`
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
`;

const CurrentText = styled.div`
  font-size: 44px;
  font-weight: 800;
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: bold;
  max-width: 70%;
  width: auto;
  display: block;
  line-height: 38px;
  text-align: right;
  padding-top: 2px;
`;

const DescriptionText = styled.div`
  font-size: 16px;
  line-height: 20px;
  padding: 0 10px;
  min-width: 30%;
  width: auto;
  max-width: initial;
  display: block;
`;

const MaxText = styled.div`
  text-align: right;
  font-weight: 800;
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: bold;
  margin-top: 10px;
`;

const StyledCounter = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 7.5px;
  background-color: ${({ theme }) => theme.appBackgroundColor};
  margin-top: 10px;
`;

const StyledCounterInner = styled(StyledCounter)`
  width: ${props => `${props.width || 0}%`};
  margin-top: 0;
  background-color: ${({ theme }) => theme.colorPrimary};
  transition: all 1.5s ease-in-out;
  .green & {
    background-color: ${({ theme }) => theme.colorSecondary};
  }
`;

const Counter = ({ current, max }) => {
  const width = current >= max ? 100 : (100 / max) * current;
  return (
    <StyledCounter>
      <StyledCounterInner width={width} />
    </StyledCounter>
  );
};

export default class PetitionCounter extends Component {
  static defaultProps = {
    current: 0,
  };
  render() {
    const { current } = this.props;
    const { max, descriptionText } = this.props;
    return (
      <Container>
        <TopContainer>
          <CurrentText>
            <CountUp end={current} duration={1.5} />
          </CurrentText>
          <DescriptionText>{descriptionText}</DescriptionText>
        </TopContainer>
        {!max ? null : (
          <React.Fragment>
            <Counter current={current} max={max} />
            <MaxText>{format(max)}</MaxText>
          </React.Fragment>
        )}
      </Container>
    );
  }
}
