import React, { Component } from 'react';
import styled from 'styled-components';
import createCard from '../createCard';
import Content from '../components/Content';

const HighlightedTextWrapper = styled.div`
  padding: ${({ theme }) => theme.mediumSpacing};
  box-shadow: ${({ theme }) => theme.defaultShadow};
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  p:last-child {
    margin-bottom: 0;
  }
`;
class HighlightedTextCardView extends Component {
  render() {
    const { content, ...props } = this.props;
    return (
      <HighlightedTextWrapper {...props}>
        <Content content={content} mini />
      </HighlightedTextWrapper>
    );
  }
}

export default createCard({
  name: 'HighlightedTextCard',
  renderWith: HighlightedTextCardView,
});
