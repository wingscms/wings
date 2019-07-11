import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import CampaignMain from '../../../internal/Campaign';

import Container from '../../../components/Container';
import LayoutDefault from '../../../components/LayoutDefault';
import Navigation from '../../../components/Navigation';

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
  background-color: ${({ theme }) => theme.backgroundColor};
`;
const CampaignContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-size: cover;
  padding: 160px 0;
  @media screen and (max-width: 800px) {
    padding: 100px 0;
  }
`;
const CampaignContent = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: block;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  text-align: center;
  @media screen and (min-width: 800px) {
    padding: 40px;
  }
`;

class CampaignTemplate extends Component {
  static Navigation = ({ pageContext: { shareUrls, node = {} } = {} }) => (
    <Navigation shareUrls={shareUrls} items={node.menu && node.menu.items} />
  );
  static Header = ({ pageContext: { node = {} } = {}, children }) => (
    <BackgroundContainerTop backgroundImage={node.image ? node.image.url : ''}>
      {children}
    </BackgroundContainerTop>
  );

  static Content = ({ pageContext: { node }, children }) => (
    <CampaignContentWrapper backgroundImage={node && node.image && node.image.url}>
      <CampaignContent>{children}</CampaignContent>
    </CampaignContentWrapper>
  );

  static Main = (props) => {
    const {
      pageContext: { node },
    } = props;
    return <CampaignMain id={node.id} resourceType={node.resourceType} node={node} {...props} />;
  };

  static defaultProps = {
    children: [
      <CampaignTemplate.Navigation />,
      <CampaignTemplate.Header />,
      <CampaignTemplate.Main />,
    ],
    layout: LayoutDefault,
  };

  childProps = () => {
    const { children, ...props } = this.props;
    return {
      ...props,
      ...this.props.childProps,
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

export default withTheme(CampaignTemplate);
