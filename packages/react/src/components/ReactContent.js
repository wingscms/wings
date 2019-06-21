import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash.includes';
import mrr from '@dailybeast/mobiledoc-react-renderer';
import { allCards } from '../';
import { slugify } from '../lib/utils';

const Renderer = mrr;

const mergeCards = (base, overrides) => {
  const names = overrides.map(({ name }) => name);
  const filtered = allCards.filter(c => !includes(names, c.name));

  return filtered.concat(overrides);
};

const convertCard = ({ View, ...card }) => ({
  ...card,
  render: ({ payload }) => <View {...payload} />,
});

export default class Content extends Component {
  static propTypes = {
    content: PropTypes.string,
    cards: PropTypes.array,
    unknownCardHandler: PropTypes.func,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    content: null,
    cards: [],
    unknownCardHandler: ({ env: { name } }) =>
      console.error(`Unknown card type ${name} encountered.`),
    onLoad: null,
  };

  constructor(props) {
    super(props);
    const cards = mergeCards(allCards, this.props.cards).map(convertCard);

    this.renderer = new Renderer({
      cards,
      unknownCardHandler: this.props.unknownCardHandler,
    });
  }

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
        .filter(c => c[0] === 'ChapterCard')
        .map(c => c[1])
        .map(({ title }) => ({ id: slugify(title), title })),
    });
  };

  render() {
    const { content, cards, unknownCardHandler, onLoad, ...props } = this.props;
    return <div {...props}>{!content ? null : this.renderer.render(JSON.parse(content))}</div>;
  }
}
