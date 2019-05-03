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
  background-color: ${({ theme }) => theme.primaryColor};
  transition: all 1.5s ease-in-out;
  .green & {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const Counter = ({ current, max }) => {
  const width = current >= max ? 100 : 100 / max * current;
  return (
    <StyledCounter>
      <StyledCounterInner width={width} />
    </StyledCounter>
  );
};

export default class PetitionCounter extends Component {
  state = {
    current: 0,
  };
  componentDidMount() {
    if (this.props.actionNetworkHelper) {
      fetch(
        `${
          process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : '/.netlify/functions'
        }/actionnetworkparticipants`,
        {
          method: 'POST',
          body: JSON.stringify({
            actionNetworkHelper: this.props.actionNetworkHelper,
          }),
        },
      )
        .then(res => res.json())
        .then((res) => {
          this.setState({ current: res.participants });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  count = () => this.state.current || this.props.current || 0;
  render() {
    const { max = 1000, descriptionText } = this.props;
    const current = this.count();
    return (
      <Container>
        <TopContainer>
          <CurrentText>
            <CountUp end={current} duration={1.5} />
          </CurrentText>
          <DescriptionText>{descriptionText}</DescriptionText>
        </TopContainer>
        <Counter current={current} max={max} />
        <MaxText>{format(max)}</MaxText>
      </Container>
    );
  }
}
