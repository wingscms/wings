import React, { Component } from 'react';
import styled from 'styled-components';
import CornerMenu from './CornerMenu';
import HighlightedContent from './HighlightedContent';
import Header, { StackedHeader } from './Header';
import Navigation from '../../../components/Navigation';
import ProgressBar from './ProgressBar';
import LayoutDefault from '../../../components/LayoutDefault';
import { makeShareUrls } from '../../../../lib/utils';

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0 20px;
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
    ...props
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
      {...props}
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

  static defaultProps = {
    layout: LayoutDefault,
  };

  childProps = () => {
    const {
      pageContext: { entry, loop, featured },
      location,
    } = this.props;
    const { headers } = this.state;
    const shareUrls = makeShareUrls(entry.platforms, location.href || '', entry.meta);
    return {
      entry,
      headers,
      shareUrls,
      loop,
      featured,
      onHeadersChange: h => this.setState({ headers: h }),
    };
  };

  children = () =>
    React.Children.map(this.props.children, element =>
      React.cloneElement(element, this.childProps()),
    );

  render() {
    const { layout: Layout } = this.props;
    return <Layout>{this.children()}</Layout>;
  }
}
