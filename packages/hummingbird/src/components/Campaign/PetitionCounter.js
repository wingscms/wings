import React, { Component } from 'react';
import styled from 'styled-components';
import { Counter } from '@wingscms/crane';
import { FormattedNumber } from 'react-intl';
import CountUp from 'react-countup';

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
  min-height: 80px;
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

export default class PetitionCounter extends Component {
  static defaultProps = {
    current: 0,
  };
  render() {
    const { current, theme } = this.props;
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
            <Counter intent="primary" current={current} max={max} theme={theme} />
            <MaxText>
              <FormattedNumber value={max} />
            </MaxText>
          </React.Fragment>
        )}
      </Container>
    );
  }
}
