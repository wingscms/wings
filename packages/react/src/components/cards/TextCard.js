import React, { Component } from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import styled from '../../lib/styled';
import createCard from '../../createCard';
import Content from '../MobiledocRenderer';

import { Surface as _Surface } from '@wingscms/components';
import { t } from '../../theme';

const TextWrapper = styled(_Surface)`
  margin: ${t(_ => _.mediumSpacing)} 0;
  padding: ${t(_ => _.mediumSpacing)};
  background-color: ${t(_ => _.elementBackgroundColor)};
  p:last-child {
    margin-bottom: 0;
  }
`;

class TextCardView extends Component {
  render() {
    const { content, ...props } = this.props;
    return (
      <TextWrapper elevation={1} {...filterInvalidDOMProps(props)}>
        <Content content={content} mini />
      </TextWrapper>
    );
  }
}

export default createCard({
  name: 'TextCard',
  renderWith: TextCardView,
});
