import React, { Component } from 'react';
import { createCard } from '@wingscms/react';
import propTypes from './propTypes';
import BlockquoteView from './BlockquoteView';
import PullquoteView from './PullquoteView';
import { TYPE, FLOAT } from './enums';

class QuoteCardView extends Component {
  static TYPE = TYPE;
  static FLOAT = FLOAT;
  static propTypes = propTypes;

  getComponent() {
    switch (this.props.type) {
      case TYPE.PULLQUOTE:
        return PullquoteView;
      default:
        return BlockquoteView;
    }
  }

  render() {
    const Comp = this.getComponent();
    return <Comp {...this.props} />;
  }
}

export default createCard({
  name: 'QuoteCard',
  renderWith: QuoteCardView,
});
