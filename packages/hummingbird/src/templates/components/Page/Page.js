import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import Content from '../../../internal/Content';

import Entry from '../Entry';

import Header from './Header';

const Title = styled.h1`
  margin: ${({ theme }) => theme.mediumSpacing} auto;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  line-height: 1.2;
  max-width: 90%;
  &.hidden {
    position: absolute;
    opacity: 0;
    left: -99999999px;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 800px) {
    margin: ${({ theme }) => theme.largeSpacing} auto;
    font-size: 3rem;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 2em;
  max-width: 760px;
  padding: 0 20px;
  @media screen and (min-width: 800px) {
    margin-top: 3em;
  }
`;

export default class PageTemplate extends Component {
  static Navigation = Entry.Navigation;

  static Header = Entry.Header;

  static Header = ({ pageContext: { node } }) => <Header article={node} />;

  static Navigation = ({
    pageContext: {
      node: { translations, platforms, menu, locale },
      shareUrls,
    },
  }) => (
    <Entry.Navigation
      shareUrls={shareUrls}
      shareMessage={platforms && platforms.all && platforms.all.description}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
    />
  );

  static Title = ({ pageContext: { node, hidden, className, children, ...props } }) => (
    <Title {...filterInvalidDOMProps(props)} className={classNames(className, { hidden })}>
      {node.title || children}
    </Title>
  );

  static Main = ({ pageContext: { node } }) => (
    <ContentWrapper>
      <Content content={node.content} />
    </ContentWrapper>
  );

  static defaultProps = {
    children: [<PageTemplate.Navigation />, <PageTemplate.Header />, <PageTemplate.Main />],
  };

  render() {
    return <Entry {...this.props} />;
  }
}
