import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import Entry from './Entry';
import _Content from '../../components/Content';

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
  static StackedHeader = Entry.StackedHeader;

  static SimpleTitle = ({ entry, hidden, className, children, ...props }) => (
    <Title {...filterInvalidDOMProps(props)} className={classNames(className, { hidden })}>
      {entry.title || children}
    </Title>
  );

  static Main = ({ entry }) => (
    <ContentWrapper>
      <Content className="mobiledoc-content" id="entry-content" content={entry.content} />
    </ContentWrapper>
  );

  static LandingSection = ({ entry }) =>
    (entry.image && entry.image.url ? (
      <LandingSection image={entry.image && entry.image.url} />
    ) : null);

  static defaultProps = {
    children: [<Page.Navigation />, <Page.StackedHeader />, <Page.Main />],
  };

  render() {
    return <Entry {...this.props} />;
  }
}
