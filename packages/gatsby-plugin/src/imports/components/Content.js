import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash.includes';
import mdr from 'mobiledoc-dom-renderer';
import { allCards } from '@wingsplatform/mobiledoc-cards';

const mergeCards = (base, overrides) => {
  const names = overrides.map(({ name }) => name);
  const filtered = allCards.filter(c => !includes(names, c.name));

  return filtered.concat(overrides);
};

const Renderer = mdr.default;

export default class Content extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    cards: PropTypes.array,
    unknownCardHandler: PropTypes.func,
  };

  static defaultProps = {
    cards: [],
    unknownCardHandler: ({ env: { name } }) =>
      console.error(`Unknown card type ${name} encountered.`),
  };

  componentDidMount() {
    const renderer = new Renderer({
      cards: mergeCards(allCards, this.props.cards),
      unknownCardHandler: this.props.unknownCardHandler,
    });

    const rendered = renderer.render(JSON.parse(this.props.content));
    this.ref.appendChild(rendered.result);
  }

  render() {
    return (
      <div
        ref={(ref) => {
          this.ref = ref;
        }}
      />
    );
  }
}
