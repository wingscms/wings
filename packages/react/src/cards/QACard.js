import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { getContrastColor } from '@wingscms/crane';
import createCard from '../createCard';
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
  margin-bottom: ${({ theme }) => theme.smallSpacing};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
`;

const QuestionWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
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

const AnswerWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <QAWrapper>
      <QuestionWrapper onClick={() => setShow(!show)}>
        <TextWrapper>
          <Content content={question} mini />
        </TextWrapper>
      </QuestionWrapper>
      <AnswerWrapper show={show}>
        <TextWrapper>
          <Content content={answer} mini />
        </TextWrapper>
      </AnswerWrapper>
    </QAWrapper>
  );
};

class QACardView extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <div>
        {title ? <Title>{title}</Title> : null}
        {content.map(x => (
          <Question question={x.question} answer={x.answer} key={`qacard-${x._id}`} />
        ))}
      </div>
    );
  }
}

export default createCard({
  name: 'QACard',
  renderWith: QACardView,
});
