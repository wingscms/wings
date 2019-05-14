/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { makeShareUrls } from '../../../../lib/utils';
import Container from '../../../components/Container';
import LayoutDefault from '../../../components/LayoutDefault';
import Navigation from '../../../components/Navigation';
import Proposition from './Proposition';

const BackgroundContainer = styled(Container)`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 20px;
  min-height: 200px;
  > div {
    padding: 20px 20px;
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
  }
  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 100%;
    max-width: 100%;
  }
`;

const BackgroundContainerTop = styled(BackgroundContainer)`
  height: 100vh;
  max-height: 700px;
  @media screen and (max-width: 800px) {
    height: 60vh;
  }
  @media screen and (max-width: 800px) and (max-height: 720px) {
    height: 60vh;
  }
  @media screen and (max-width: 800px) and (max-height: 530px) {
    height: 100vh;
  }
`;

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.appBackgroundColor};
`;

export default class Campaign extends Component {
  static defaultProps = {
    layout: LayoutDefault,
  };
  static Proposition = Proposition;
  static Navigation = ({ pageContext: { shareUrls, node } }) => (
    <Navigation shareUrls={shareUrls} items={node.menu && node.menu.items} />
  );
  static Header = ({ pageContext: { node } }) => (
    <BackgroundContainerTop backgroundImage={node.image ? node.image.url : ''} />
  );
  childProps = () => {
    const {
      pageContext: { petition, event, node: _node },
      location,
    } = this.props;
    const node = petition || event || _node;
    const shareUrls = makeShareUrls(node.platforms, location.href || '', node.meta);
    return {
      ...this.props,
      pageContext: {
        ...this.props.pageContext,
        node,
        shareUrls,
      },
    };
  };

  children = () =>
    React.Children.map(this.props.children, element =>
      React.cloneElement(element, this.childProps()),
    );

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <Wrapper>{this.children()}</Wrapper>
      </Layout>
    );
  }
}
