import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';
import Layout from '../../components/Layout';
import _Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import HighlightedContent from '../../components/HighlightedContent';
import { StackedHeader } from '../../components/Header';

import { makeShareUrls, parseBool } from '../../../lib/utils';

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

const StyledMenuContentWrapper = styled(MenuContentWrapper)`
  .slide-menu.chapters {
    position: fixed;
    z-index: 50;
  }
  &.chaptersOpen {
    .slide-menu.chapters {
      position: fixed;
      margin-left: 300px;
      top: 0;
      height: 100vh;
    }
  }
  @media screen and (max-width: 800px) {
    .slide-menu.chapters {
      left: -100vw;
    }
    &.chaptersOpen {
      margin-left: 100vw;
      padding-right: 100vw;
      width: calc(100% + 100vw);
      .slide-menu.chapters {
        margin-left: 100vw;
      }
    }
  }
`;

export default class Page extends Component {
  static Navigation = ({
    entry: {
      translations,
      menu,
      locale,
      meta: { hideMenu },
    },
    headers,
  }) => (
    <Navigation
      chapters={headers}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
      hideMenu={hideMenu}
    />
  );

  static Title = (props) => {
    const { hidden, entry } = props;
    return (
      <Title {...props} className={hidden ? 'hidden' : ''}>
        {entry.title}
      </Title>
    );
  };

  static Header = ({ entry }) => (
    <ContentWrapper>
      <StackedHeader article={entry} />
    </ContentWrapper>
  );

  static Main = ({ entry }) => (
    <ContentWrapper>
      <Content className="article-body" id="article-body" content={entry.content} />
    </ContentWrapper>
  );

  static LandingSection = ({ entry }) =>
    (entry.image && entry.image.url ? (
      <LandingSection image={entry.image && entry.image.url} />
    ) : null);

  static HighlightedContent = (props) => {
    const { entry, loop, featured } = props;
    return loop.length < 1 && featured.length < 1 ? null : (
      <HighlightedContent {...props} entry={entry} featured={featured} loop={loop} />
    );
  };

  static defaultProps = {
    children: [<Page.Navigation />, <Page.Header />, <Page.Main />],
  };

  constructor({ pageContext: { entry }, location }) {
    super();
    this.state = {
      shareUrls: makeShareUrls(entry.platforms, location.href || '', entry.meta || entry.meta.seo),
    };
  }

  children = () => {
    const {
      pageContext: {
        entry,
        entry: { translations: _translations },
        loop,
        featured,
      },
      children,
    } = this.props;
    const { headers, shareUrls } = this.state;
    const translations = Object.keys(_translations || {}).map(_locale => ({
      _locale,
      path: _translations[_locale].path,
    }));

    const childProps = {
      entry: { ...entry, translations },
      headers,
      shareUrls,
      loop,
      featured,
      onHeadersChange: h => this.setState({ headers: h }),
    };

    return React.Children.map(children, element => React.cloneElement(element, childProps));
  };

  render() {
    const {
      pageContext: {
        entry: {
          meta: { dropCap },
        },
      },
    } = this.props;
    return (
      <Layout>
        <div id={this.props.id}>
          <StyledMenuContentWrapper
            id="content-wrapper"
            className={`page${parseBool(dropCap) ? ' drop-cap' : ''}`}
          >
            {this.children()}
            <Footer />
          </StyledMenuContentWrapper>
        </div>
      </Layout>
    );
  }
}
