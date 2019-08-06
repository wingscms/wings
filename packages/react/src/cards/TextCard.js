import React, { Component } from 'react';
import styled from 'styled-components';
import createCard from '../createCard';
import Content from '../components/Content';

const TextWrapper = styled.div`
  margin: ${({ theme }) => theme.mediumSpacing} 0;
  padding: ${({ theme }) => theme.smallSpacing};
  box-shadow: ${({ theme }) => theme.defaultShadow};
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  p:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 800px) {
    margin: ${({ theme }) => theme.largeSpacing} 0;
    padding: ${({ theme }) => theme.mediumSpacing};
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
