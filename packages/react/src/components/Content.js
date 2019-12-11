import React, { Component } from 'react';
import styled from 'styled-components';
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

class Content extends Component {
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

  createRenderer() {
    const { cards: cardsProp, unknownCardHandler } = this.props;
    const _cards = mergeCards(allCards, cardsProp)
      .map(convertCard)
      .map(this.injectCardProps);

    return new Renderer({
      cards: _cards,
      unknownCardHandler,
    });
  }

  injectCardProps = card => {
    const { cardProps: cardPropsProp } = this.props;
    const cardRender = card.render;
    return {
      ...card,
      render: ({ payload }) =>
        cardRender({ payload, sectionKey: payload.key, ...cardPropsProp[card.name] }),
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
    onLoad({
      headers: doc.cards
        .filter(c => ['HeaderCard', 'ChapterCard'].indexOf(c[0]) > -1)
        .map(c => c[1])
        .map(({ title }) => ({ id: slugify(title), title })),
    });
  };

  render() {
    const {
      content,
      cards: _cards,
      unknownCardHandler,
      onLoad,
      cardProps: _,
      ...props
    } = this.props;
    const renderer = this.createRenderer();
    return <div {...props}>{!content ? null : renderer.render(JSON.parse(content))}</div>;
  }
}

export default styled(Content)`
  font-size: 16px;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 800px) {
    font-size: 23px;
  }
  p a,
  ol a,
  ul a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.primaryColor} 0%,
      ${({ theme }) => theme.primaryColor} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0% 100%;
    transition: background-size 0.1s linear;
    &:hover,
    &:focus {
      background-size: 100% 4px;
      background-image: linear-gradient(
        120deg,
        ${({ theme }) => theme.primaryColor} 0%,
        ${({ theme }) => theme.primaryColor} 100%
      );
    }
  }
  color: ${({ theme }) => theme.textColor};
  padding-bottom: ${({ mini }) => (mini ? '0' : '40px')};
  font-weight: ${({ theme }) => theme.bodyFontWeight};
  > * {
    margin-bottom: 0;
    margin-top: 0;
    & + * {
      margin-top: 1rem;
      @media screen and (min-width: 800px) {
        margin-top: 1.5rem;
      }
    }
    & + h2,
    & + h3 {
      margin-top: 1.5rem;
      @media screen and (min-width: 800px) {
        margin-top: 3rem;
      }
    }
  }
  & > div > p:first-child {
    margin-top: ${({ mini, theme }) => (mini ? '0' : theme.largeSpacing)};
    @media screen and (max-width: 800px) {
      margin-top: ${({ mini, theme }) => (mini ? '0' : theme.mediumSpacing)};
    }
  }
  &.drop-cap > div > p:first-child {
    &::first-letter {
      font-weight: ${({ theme }) => theme.firstLetterFontWeight}!important;
      color: ${({ theme }) => theme.primaryColor};
      float: left;
      line-height: ${({ theme }) => theme.firstLetterLineHeight};
      margin: 0.075em 0.1em -0.1em 0;
      font-size: ${({ theme }) => theme.dropcapFontSize};
      font-family: ${({ theme }) => theme.headingFont};
    }
  }
  > div {
    > ul,
    > ol {
      li {
        margin: 0;
      }
    }
    > blockquote {
      border-left: 2px solid ${({ theme }) => theme.primaryColor};
      margin: 0;
      padding: 0 0 0 1rem;
      color: #000;
    }
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      color: ${({ theme }) => theme.textColor};
      margin-bottom: ${({ theme }) => theme.extraSmallSpacing};
      line-height: 1.2;
      text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
      @media screen and (min-width: 800px) {
        margin-bottom: ${({ theme }) => theme.smallSpacing};
      }
    }
  }
  &.drop-cap > div > div.headerContainer + p {
    position: relative;
    &::first-letter {
      font-weight: ${({ theme }) => theme.firstLetterFontWeight}!important;
      color: ${({ theme }) => theme.primaryColor};
      float: left;
      line-height: ${({ theme }) => theme.firstLetterLineHeight};
      margin: 0.075em 0.1em -0.2em 0;
      font-size: ${({ theme }) => theme.dropcapFontSize};
      font-family: ${({ theme }) => theme.headingFont};
    }
  }
`;
