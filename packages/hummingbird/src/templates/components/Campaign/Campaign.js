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
const PetitionContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #000;
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-size: cover;
  padding: 160px 0;
  @media screen and (max-width: 800px) {
    padding: 100px 0;
  }
`;
const PetitionContent = styled.div`
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff !important;
  border-radius: 4px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  @media screen and (min-width: 800px) {
    padding: 40px;
  }
`;
export default class Campaign extends Component {
  static defaultProps = {
    layout: LayoutDefault,
  };
  static Proposition = Proposition;
  static Navigation = ({ pageContext: { shareUrls, node = {} } = {} }) => (
    <Navigation shareUrls={shareUrls} items={node.menu && node.menu.items} />
  );
  static Header = ({ pageContext: { node = {} } = {}, children }) => (
    <BackgroundContainerTop backgroundImage={node.image ? node.image.url : ''}>
      {children}
    </BackgroundContainerTop>
  );

  static Title = styled.h1`
    font-size: 3em;
    @media screen and (max-width: 800px) {
      font-size: 2em;
    }
  `;

  static Content = ({ pageContext: { node }, children }) => (
    <PetitionContentWrapper backgroundImage={node && node.image && node.image.url}>
      <PetitionContent>{children}</PetitionContent>{' '}
    </PetitionContentWrapper>
  );

  childProps = () => {
    const { children: _, ...props } = this.props;
    const {
      pageContext: { petition, event, node: _node },
      location,
    } = props;
    const node = petition || event || _node;
    const url = (location.href || '').replace(/\/confirm(?:ed)?$/, '');
    const shareUrls = makeShareUrls(node.platforms, url, node.meta);
    return {
      ...props,
      pageContext: {
        ...props.pageContext,
        node,
        shareUrls,
      },
    };
  };

  children = (children = this.props.children) => {
    const props = this.childProps();
    return React.Children.map(children, element => React.cloneElement(element, props));
  };

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <Wrapper>{this.children()}</Wrapper>
      </Layout>
    );
  }
}
