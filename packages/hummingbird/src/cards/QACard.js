import React, { Component } from 'react';
import styled from 'styled-components';
import { createCard } from '@wingscms/react';
import { getContrastColor } from '@wingscms/crane';
import Content from '../components/Content';

const Title = styled.h3`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;

  @media screen and (max-width: 645px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const TextWrapper = styled.div`
  display: block;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Question = styled(TextWrapper)`
  margin-left: auto;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor || '#ffffff',
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
`;

const Answer = styled(TextWrapper)`
  margin-right: auto;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
`;

class QACardView extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <div>
        <Title>{title}</Title>
        {content.map(x => (
          <div key={`qacard-${x._id}`}>
            <Question>
              <Content content={x.question} mini />
            </Question>
            <Answer>
              <Content content={x.answer} mini />
            </Answer>
          </div>
        ))}
      </div>
    );
  }
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
