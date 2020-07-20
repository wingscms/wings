import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import Renderer from '@wingscms/mobiledoc-renderer';

import styled from '../../lib/styled';
import sections from './sections';
import markups from './markups';

class MobiledocRenderer extends Component {
  static propTypes = {
    content: PropTypes.string,
    cards: PropTypes.array,
    unknownCardHandler: PropTypes.func,
  };

  static defaultProps = {
    content: null,
    cards: [],
    cardProps: {},
    unknownCardHandler: ({ env: { name } }) =>
      console.error(`Unknown card type ${name} encountered.`), // eslint-disable-line no-console
  };

  createRenderer() {
    const { cards, unknownCardHandler } = this.props;
    return new Renderer({
      cards: cards.map(this.injectCardProps),
      sections,
      unknownCardHandler,
      markups,
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

  render() {
    const { content, cards: _cards, unknownCardHandler, cardProps: _, ...props } = this.props;
    const renderer = this.createRenderer();
    return (
      <div {...filterInvalidDOMProps(props)}>
        {!content ? null : renderer.render(JSON.parse(content))}
      </div>
    );
  }
}

export default styled(MobiledocRenderer)`
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
`;
