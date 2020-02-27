import React, { Component } from 'react';
import includes from 'lodash.includes';
import PropTypes from 'prop-types';
import MobiledocRenderer from './MobiledocRenderer';
import { slugify } from '../lib/utils';
import { allCards } from '../cards';

const mergeCards = (base, overrides) => {
  const names = overrides.map(({ name }) => name);
  const filtered = base.filter(c => !includes(names, c.name));

  return filtered.concat(overrides);
};

const convertCard = ({ View, ...card }) => ({
  ...card,
  render: ({ payload, ...props }) => <View {...payload} {...props} />,
});

export default class Content extends Component {
  static propTypes = {
    cards: PropTypes.array,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    cards: [],
    onLoad: null,
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
    onLoad({
      headers: doc.cards
        .filter(c => ['HeaderCard', 'ChapterCard'].indexOf(c[0]) > -1)
        .map(c => c[1])
        .map(({ title }) => ({ id: slugify(title), title })),
    });
  };

  render() {
    return (
      <MobiledocRenderer
        {...this.props}
        cards={mergeCards(allCards, this.props.cards).map(convertCard)}
      />
    );
  }
}
