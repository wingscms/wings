import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { getContrastColor, Icons } from '@wingscms/crane';
import createCard from '../createCard';
import Content from '../components/Content';

const Container = styled.div`
  margin: ${({ theme }) => theme.mediumSpacing} 0;
  @media screen and (min-width: 800px) {
    margin: ${({ theme }) => theme.largeSpacing} 0;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;

  @media screen and (max-width: 645px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Text = styled.div`
  display: block;
  padding: 20px;
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const QA = styled.div`
  display: block;
  box-shadow: ${({ theme }) => theme.defaultShadow};
`;

const QuestionWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.elementBackgroundColor};
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionText = styled.div`
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: all 0.2s ease-in-out;
  padding-right: 60px;
  p {
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    background-color: ${({ theme }) => theme.elementBackgroundColor};
    p {
      color: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.elementBackgroundColor,
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
    }
  }
`;

const AnswerText = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 20px;
  height: auto;
  transform: translateY(-50%);
  fill: ${({ theme }) => theme.primaryColor};
  svg {
    width: 100%;
    height: auto;
  }
`;

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <QuestionWrapper>
      <QuestionText onClick={() => setShow(!show)} show={show}>
        <Icon>{show ? <Icons.ChevronUp /> : <Icons.ChevronDown />}</Icon>
        <Text>
          <Content content={question} mini />
        </Text>
      </QuestionText>
      <AnswerText show={show}>
        <Text>
          <Content content={answer} mini />
        </Text>
      </AnswerText>
    </QuestionWrapper>
  );
};

class QACardView extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <Container>
        {title ? <Title>{title}</Title> : null}
        <QA>
          {content.map(x => (
            <Question question={x.question} answer={x.answer} key={`qacard-${x._id}`} />
          ))}
        </QA>
      </Container>
    );
  }
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
