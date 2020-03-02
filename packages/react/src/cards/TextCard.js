import React, { Component } from 'react';
import styled from '../lib/styled';
import createCard from '../createCard';
import Content from '../components/MobiledocRenderer';

const TextWrapper = styled.div`
  margin: ${({ theme }) => theme.mediumSpacing} 0;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  p {
    font-size: 0.9em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
class TextCardView extends Component {
  render() {
    const { content, ...props } = this.props;
    return (
      <TextWrapper {...props}>
        <Content content={content} mini />
      </TextWrapper>
    );
  }
}

export default createCard({
  name: 'TextCard',
  renderWith: TextCardView,
});
