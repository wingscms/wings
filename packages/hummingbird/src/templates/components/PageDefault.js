import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@hummingbird/design';
import Layout from '../../components/Layout';
import _Content from '../../components/Content';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { StackedHeader } from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';

import { makeShareUrls, parseBool } from '../../../lib/utils';

const Content = styled(_Content)`
  p:first-child {
    margin-top: 2em;
    @media screen and (min-width: 800px) {
      margin-top: 3em;
    }
  }
`;

const Page = styled.article`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
  min-height: 100vh;
`;

export default class PageDefault extends Component {
  constructor({ pageContext: { entry }, location }) {
    super();
    this.state = {
      shareUrls: makeShareUrls(entry.platforms, location.href || '', entry.meta || entry.meta.seo),
    };
  }

  render() {
    const { entry, entry: { meta = {} } } = this.props.pageContext;
    const { translations } = entry;
    const { dropCap, hideMenu } = meta;
    const { shareUrls } = this.state;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper">
          {entry.type.id === 'article' && <ProgressBar />}
          <Navigation
            shareUrls={shareUrls}
            items={entry.menu && entry.menu.items}
            translations={Object.keys(translations || {}).map(locale => ({
              locale,
              path: entry.translations[locale].path,
            }))}
            locale={entry.locale}
            hideMenu={hideMenu}
          />
          <Page className={`page${parseBool(dropCap) ? ' drop-cap' : ''}`}>
            <StackedHeader article={entry} />
            <Content className="article-body" id="article-body" content={entry.content} />
          </Page>
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
