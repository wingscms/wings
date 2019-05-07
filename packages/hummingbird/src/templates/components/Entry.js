import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';
import CornerMenu from '../../components/CornerMenu';
import HighlightedContent from '../../components/HighlightedContent';
import Header, { StackedHeader } from '../../components/Header';
import Navigation from '../../components/Navigation';
import ProgressBar from '../../components/ProgressBar';

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

export default class Entry extends Component {
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

  static FullWidthHeader = ({ entry }) => <Header article={entry} />;

  static HighlightedContent = (props) => {
    const { entry, loop, featured } = props;
    return loop.length < 1 && featured.length < 1 ? null : (
      <HighlightedContent {...props} entry={entry} featured={featured} loop={loop} />
    );
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

  static ProgressBar = props => <ProgressBar {...props} />;

  static StackedHeader = ({ entry }) => (
    <ContentWrapper>
      <StackedHeader article={entry} />
    </ContentWrapper>
  );

  static StyledMenuContentWrapper = props => (
    <StyledMenuContentWrapper {...props}>{props.children}</StyledMenuContentWrapper>
  );
}
