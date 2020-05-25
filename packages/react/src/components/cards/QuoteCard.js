import React from 'react';
import { Blockquote, Pullquote } from '@wingscms/components';
import createCard from '../../createCard';

const TYPE_COMPONENT_MAP = {
  blockquote: Blockquote,
  pullquote: Pullquote,
  0: Blockquote,
  1: Pullquote,
};

const DEFAULT_COMPONENT = TYPE_COMPONENT_MAP.blockquote;

const ALIGN_MAP = {
  center: 'center',
  left: 'left',
  right: 'right',
  0: 'center',
  1: 'left',
  2: 'right',
};

const DEFAULT_ALIGN = ALIGN_MAP.center;

function QuoteCardView({ align, float, type, ...props }) {
  const Component = TYPE_COMPONENT_MAP[type] || DEFAULT_COMPONENT;

  return <Component align={ALIGN_MAP[align || float] || DEFAULT_ALIGN} {...props} />;
}

const QuoteCard = createCard({
  name: 'QuoteCard',
  renderWith: QuoteCardView,
});

export default QuoteCard;
