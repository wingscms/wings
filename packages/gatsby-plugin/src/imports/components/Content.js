import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash.includes';
import mdr from 'mobiledoc-dom-renderer';
import { allCards } from '@wingsplatform/mobiledoc-cards';
import _slugify from 'slugify';

const slugify = s => _slugify(s, {
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true,
});

const Renderer = mdr.default;

const mergeCards = (base, overrides) => {
  const names = overrides.map(({ name }) => name);
  const filtered = allCards.filter(c => !includes(names, c.name));

  return filtered.concat(overrides);
};

export default class Content extends Component {
  static slugify = slugify;
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

  componentDidMount() {
    const { content } = this.props;
    if (!content) return;
    const renderer = new Renderer({
      cards: mergeCards(allCards, this.props.cards),
      unknownCardHandler: this.props.unknownCardHandler,
    });

    const { result } = renderer.render(JSON.parse(content));
    this.ref.appendChild(result);
    this.onLoad();
  }

  onLoad = () => {
    const { content, onLoad } = this.props;
    if (!onLoad) return;

    const doc = JSON.parse(content);
    this.props.onLoad({
      headers:
        doc.cards
          .filter(c => c[0] === 'HeaderCard')
          .map(c => c[1])
          .map(({ title }) => ({ id: slugify(title), title })),
    });
  };

  render() {
    const { content, cards, unknownCardHandler, onLoad, ...props } = this.props;
    return (
      <div
        ref={(ref) => {
          this.ref = ref;
        }}
        {...props}
      />
    );
  }
}
