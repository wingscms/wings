import React from 'react';
import { Blockquote, Pullquote } from '@wingscms/components';
import createCard from '../../createCard';

const Type = {
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
};

// for backwards compatibility
const getAlign = align => {
  if (align === Pullquote.Align.LEFT || align === 1) return Pullquote.Align.LEFT;
  if (align === Pullquote.Align.RIGHT || align === 2) return Pullquote.Align.RIGHT;
  return Pullquote.Align.CENTER;
};

function QuoteCardView({ align, float, type, ...props }) {
  const _align = align || float;
  // number check for compatibility
  if (type === Type.PULLQUOTE || type === 1)
    return <Pullquote align={getAlign(_align)} {...props} />;
  return <Blockquote {...props} />;
}

export default createCard({
  name: 'QuoteCard',
  renderWith: QuoteCardView,
});
