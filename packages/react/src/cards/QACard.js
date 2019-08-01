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

const TextWrapper = styled.div`
  display: block;
  padding: 20px;
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const QAWrapper = styled.div`
  display: block;
  box-shadow: ${({ theme }) => theme.defaultShadow};
`;

const QuestionWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.elementBackgroundColor};
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionTextWrapper = styled.div`
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: all 0.2s ease-in-out;
  padding-right: 60px;
  p {
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

const AnswerTextWrapper = styled.div`
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
      <QuestionTextWrapper onClick={() => setShow(!show)} show={show}>
        <Icon>{show ? <Icons.ChevronUp /> : <Icons.ChevronDown />}</Icon>
        <TextWrapper>
          <Content content={question} mini />
        </TextWrapper>
      </QuestionTextWrapper>
      <AnswerTextWrapper show={show}>
        <TextWrapper>
          <Content content={answer} mini />
        </TextWrapper>
      </AnswerTextWrapper>
    </QuestionWrapper>
  );
};

class QACardView extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <Container>
        {title ? <Title>{title}</Title> : null}
        <QAWrapper>
          {content.map(x => (
            <Question question={x.question} answer={x.answer} key={`qacard-${x._id}`} />
          ))}
        </QAWrapper>
      </Container>
    );
  }
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
