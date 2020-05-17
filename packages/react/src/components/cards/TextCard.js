import React, { Component } from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import styled from '../../lib/styled';
import createCard from '../../createCard';
import Content from '../MobiledocRenderer';
import { t } from '../../theme';

const TextWrapper = styled.div`
  margin: ${t(_ => _.mediumSpacing)} 0;
  padding: 30px;
  box-shadow: ${t(_ => _.shadow)};
  background-color: ${t(_ => _.elementBackgroundColor)};
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
      <TextWrapper {...filterInvalidDOMProps(props)}>
        <Content content={content} mini />
      </TextWrapper>
    );
  }
}

export default createCard({
  name: 'TextCard',
  renderWith: TextCardView,
});
