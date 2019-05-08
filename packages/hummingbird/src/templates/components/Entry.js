import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { MenuContentWrapper as _MenuContentWrapper } from '@wingscms/crane';
import CornerMenu from '../../components/CornerMenu';
import HighlightedContent from '../../components/HighlightedContent';
import Header, { StackedHeader } from '../../components/Header';
import Navigation from '../../components/Navigation';
import ProgressBar from '../../components/ProgressBar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import { makeShareUrls, parseBool } from '../../../lib/utils';

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
`;

const MenuContentWrapper = styled(_MenuContentWrapper)`
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

export default class Entry extends Component {
  static ProgressBar = ProgressBar;
  static Header = ({ entry, ...props }) => <Header article={entry} {...props} />;

  static CornerMenu = ({
    entry: {
      meta: { chapterMenu, shareMessage },
      translations,
      locale,
    },
    headers,
  }) => (
    <CornerMenu
      chapterMenu={chapterMenu}
      chapters={headers}
      shareMessage={shareMessage}
      locale={locale}
      translations={translations}
    />
  );

  static HighlightedContent = (props) => {
    const { loop = [], featured = [] } = props;
    if (loop.length < 1 && featured.length < 1) return '';
    return <HighlightedContent {...props} />;
  };

  static Navigation = ({
    entry: {
      translations,
      platforms,
      menu,
      locale,
      meta: { shareMessage, chapterMenu, hideMenu },
    },
    headers,
    shareUrls,
  }) => (
    <Navigation
      chapters={headers}
      chapterMenu={chapterMenu && chapterMenu === 'slide'}
      shareUrls={shareUrls}
      shareMessage={shareMessage || (platforms && platforms.all && platforms.all.description)}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
      hideMenu={hideMenu}
    />
  );

  static StackedHeader = ({ entry }) => (
    <ContentWrapper>
      <StackedHeader article={entry} />
    </ContentWrapper>
  );

  state = {
    headers: [],
  };

  children = () => {
    const {
      pageContext: {
        entry,
        entry: { translations: _translations },
        loop,
        featured,
      },
      children,
      location,
    } = this.props;
    const { headers } = this.state;
    const shareUrls = makeShareUrls(entry.platforms, location.href || '', entry.meta);
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
          type,
          meta: { dropCap },
        },
      },
    } = this.props;
    return (
      <Layout>
        <div id={this.props.id}>
          <MenuContentWrapper
            id="content-wrapper"
            className={classNames(type.id, { 'drop-cap': parseBool(dropCap) })}
          >
            {this.children()}
            <Footer />
          </MenuContentWrapper>
        </div>
      </Layout>
    );
  }
}
