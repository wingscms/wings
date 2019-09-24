import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash.includes';
import Renderer03 from '@dailybeast/mobiledoc-react-renderer/dist/renderers/0-3';
import Renderer from '@dailybeast/mobiledoc-react-renderer';
import { allCards, cards } from '../cards';
import { slugify } from '../lib/utils';

const cardProps = Object.keys(cards).reduce(
  (types, card) => ({ ...types, [card]: PropTypes.object }),
  {},
);

Renderer03.prototype.parseProps = function parseProps(attrss) {
  if (attrss) {
    return {
      [attrss[0]]: attrss[1],
      [attrss[2]]: attrss[3],
    };
  }
  return null;
};

const mergeCards = (base, overrides) => {
  const names = overrides.map(({ name }) => name);
  const filtered = allCards.filter(c => !includes(names, c.name));

  return filtered.concat(overrides);
};

const convertCard = ({ View, ...card }) => ({
  ...card,
  render: ({ payload, ...props }) => <View {...payload} {...props} />,
});

export default class Content extends Component {
  static propTypes = {
    content: PropTypes.string,
    cards: PropTypes.array,
    unknownCardHandler: PropTypes.func,
    onLoad: PropTypes.func,
    cardProps: PropTypes.shape(cardProps),
  };

  static defaultProps = {
    content: null,
    cards: [],
    unknownCardHandler: ({ env: { name } }) =>
      console.error(`Unknown card type ${name} encountered.`),
    onLoad: null,
    cardProps: {},
  };

  constructor(props) {
    super(props);
    const _cards = mergeCards(allCards, this.props.cards)
      .map(convertCard)
      .map(this.injectCardProps);

    this.renderer = new Renderer({
      cards: _cards,
      unknownCardHandler: this.props.unknownCardHandler,
    });
  }

  injectCardProps = (card) => {
    const cardRender = card.render;
    return {
      ...card,
      render: ({ payload }) => cardRender({ payload, ...this.props.cardProps[card.name] }),
    };
  };

  componentDidMount() {
    const { content } = this.props;
    if (!content) return;
    this.onLoad();
  }

  onLoad = () => {
    const { content, onLoad } = this.props;
    if (!onLoad) return;

    const doc = JSON.parse(content);
    this.props.onLoad({
      headers: doc.cards
        .filter(c => c[0] === 'HeaderCard')
        .map(c => c[1])
        .map(({ title }) => ({ id: slugify(title), title })),
    });
  };

  render() {
    const { content, cards: _cards, unknownCardHandler, onLoad, ...props } = this.props;
    return <div {...props}>{!content ? null : this.renderer.render(JSON.parse(content))}</div>;
  }
}
