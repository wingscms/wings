import React from 'react';
import { Blockquote } from '@wingscms/components';
import createCard from '../../../createCard';
import PullquoteView from './PullquoteView';
import { TYPE } from './enums';

function QuoteCardView(props) {
  switch (props.type) {
    case TYPE.PULLQUOTE:
      return <PullquoteView {...props} />;
    default:
      return <Blockquote {...props} />;
  }
}

export default createCard({
  name: 'QuoteCard',
  renderWith: QuoteCardView,
});
