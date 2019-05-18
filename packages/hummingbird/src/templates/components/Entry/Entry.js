import React, { Component } from 'react';
import styled from 'styled-components';
import CornerMenu from './CornerMenu';
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
  static Header = ({ node, ...props }) => <Header article={node} {...props} />;

  static CornerMenu = ({ node: { translations, locale }, headers }) => (
    <CornerMenu chapters={headers} locale={locale} translations={translations} />
  );

  static Navigation = ({
    node: { translations, platforms, menu, locale },
    headers,
    shareUrls,
    ...props
  }) => (
    <Navigation
      chapters={headers}
      shareUrls={shareUrls}
      shareMessage={platforms && platforms.all && platforms.all.description}
      items={menu && menu.items}
      translations={translations}
      locale={locale}
      {...props}
    />
  );

  static StackedHeader = ({ node }) => (
    <ContentWrapper>
      <StackedHeader article={node} />
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
      pageContext: { node, loop, featured },
      location,
    } = this.props;
    const { headers } = this.state;
    const shareUrls = makeShareUrls(node.platforms, location.href || '');
    return {
      node,
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
