import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Renderer03 from '@dailybeast/mobiledoc-react-renderer/dist/renderers/0-3';
import Renderer from '@dailybeast/mobiledoc-react-renderer';
import styled from '../lib/styled';

Renderer03.prototype.parseProps = function parseProps(attrss) {
  if (attrss) {
    return {
      [attrss[0]]: attrss[1],
      [attrss[2]]: attrss[3],
    };
  }
  return null;
};

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

  render() {
    const { content, cards: _cards, unknownCardHandler, cardProps: _, ...props } = this.props;
    const renderer = this.createRenderer();
    return <div {...props}>{!content ? null : renderer.render(JSON.parse(content))}</div>;
  }
}

export default styled(MobiledocRenderer)`
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
