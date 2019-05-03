import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';
import Layout from '../../components/Layout';
import _Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';
import HighlightedContent from '../../components/HighlightedContent';

import { parseBool } from '../../../lib/utils';

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

const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  &.hidden {
    position: absolute;
    opacity: 0;
    left: -99999999px;
  }
`;

const Content = styled(_Content)`
  p:first-child {
    margin-top: 2em;
    @media screen and (min-width: 800px) {
      margin-top: 3em;
    }
  }
`;

const Page = styled.article`
  margin: 40px auto 0 auto;
  max-width: 760px;
  padding: 0 20px;
`;

export default class PageHome extends Component {
  orderedContent(layout) {
    const { entry, loop, featured } = this.props.pageContext;
    const { dropCap } = entry.meta;
    if (!layout.includes('title')) {
      layout.unshift('hiddenTitle');
    }
    return layout.map((x, i) => {
      const props = { key: `page-layout-${i}` };
      switch (x) {
        case 'hiddenTitle':
        case 'title':
          return (
            <Title {...props} className={x === 'hiddenTitle' ? 'hidden' : ''}>
              {entry.title}
            </Title>
          );
        case 'highlightedContent':
          return loop.length < 1 && featured.length < 1 ? null : (
            <HighlightedContent {...props} entry={entry} featured={featured} loop={loop} />
          );
        case 'entryContent':
          return (
            <Page {...props} className={`page home${parseBool(dropCap) ? ' drop-cap' : ''}`}>
              <Content className="article-body" id="article-body" content={entry.content} />
            </Page>
          );
        default:
          return <div {...props} />;
      }
    });
  }

  render() {
    const { entry } = this.props.pageContext;
    const { meta, translations } = entry;
    const { hideMenu, layoutOrder = 'entryContent,highlightedContent' } = meta;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="article">
          {entry.type.id === 'article' && <ProgressBar />}
          <Navigation
            items={entry.menu && entry.menu.items}
            translations={Object.keys(translations || {}).map(locale => ({
              locale,
              path: entry.translations[locale].path,
            }))}
            locale={entry.locale}
            hideMenu={hideMenu}
          />
          {entry.image && entry.image.url ? (
            <LandingSection image={entry.image && entry.image.url} />
          ) : null}
          {this.orderedContent(layoutOrder.split(','))}
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
