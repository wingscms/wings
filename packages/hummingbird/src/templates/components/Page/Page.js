import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import Entry from '../Entry';
import _Content from '../../../components/Content';
import Header from './Header';

const LandingSection = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100%;
  height: 50vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled(_Content)`
  p:first-child {
    margin-top: 2em;
    @media screen and (min-width: 800px) {
      margin-top: 3em;
    }
  }
`;

const Title = styled.h1`
  margin: 0 auto 80px auto;
  text-align: center;
  &.hidden {
    position: absolute;
    opacity: 0;
    left: -99999999px;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
`;

export default class Page extends Component {
  static Navigation = Entry.Navigation;
  static Header = Entry.Header;
  static Header = ({ node }) => (
    <ContentWrapper>
      <Header article={node} />
    </ContentWrapper>
  );
  static Navigation = ({ node: { translations, platforms, menu, locale }, shareUrls }) => (
    <Entry.Navigation
      shareUrls={shareUrls}
      shareMessage={platforms && platforms.all && platforms.all.description}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
    />
  );

  static Title = ({ node, hidden, className, children, ...props }) => (
    <Title {...filterInvalidDOMProps(props)} className={classNames(className, { hidden })}>
      {node.title || children}
    </Title>
  );

  static Main = ({ node }) => (
    <ContentWrapper>
      <Content className="mobiledoc-content" id="entry-content" content={node.content} />
    </ContentWrapper>
  );

  static LandingSection = ({ node }) =>
    (node.image && node.image.url ? <LandingSection image={node.image && node.image.url} /> : null);

  static defaultProps = {
    children: [<Page.Navigation />, <Page.Header />, <Page.Main />],
  };

  render() {
    return <Entry {...this.props} />;
  }
}
