import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Content from '../../../components/Content';
import CampaignForm from '../../../components/CampaignForm';
import Container from '../../../components/Container';
import PetitionCounter from './PetitionCounter';
import EventDetails from './EventDetails';
import { makeShareUrls } from '../../../../lib/utils';
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
const CampaignContentWrapper = styled.div`
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
const CampaignContent = styled.div`
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

const MainContainerOuter = styled(Container)`
  margin-top: -300px;
  overflow: auto;
  margin-bottom: 40px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 0;
  }
`;

const MainContainerInner = styled(Container)`
  max-width: 1160px;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const FormContainer = styled.div`
  display: inline-block;
  width: 460px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.darkHeadingColor};
  vertical-align: top;
  border-radius: 4px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  align-self: flex-start;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const FormContainerInner = styled.div`
  padding: 40px;
  display: block;
  @media screen and (max-width: 1000px) {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

const Intro = styled.p`
  font-size: 1.2em;
`;
const CounterContainer = styled(FormContainerInner)`
  padding: 20px 40px;
  background-color: #fff;
  color: #000;
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;
export default class Campaign extends Component {
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
    font-size: 2em;
    @media screen and (max-width: 800px) {
      font-size: 2em;
    }
  `;

  static Content = ({ pageContext: { node }, children }) => (
    <CampaignContentWrapper backgroundImage={node && node.image && node.image.url}>
      <CampaignContent>{children}</CampaignContent>
    </CampaignContentWrapper>
  );

  static Main = (props) => {
    const {
      pageContext: {
        node: { resourceType, title, intro, meta },
        node,
      },
      formProps = {},
    } = props;
    const [signatureCount, setSignatureCount] = useState(null);
    const handleCampaignLoad = (campaign) => {
      if (!resourceType === 'node.campaign.petition') return;
      setSignatureCount(campaign.signatureCount);
      if (formProps.onLoad) formProps.onLoad(campaign);
    };
    return (
      <React.Fragment>
        <MainContainerOuter>
          <MainContainerInner>
            <Campaign.Proposition>
              {title ? <Title>{title}</Title> : null}
              {intro ? <Intro fullWidth>{intro}</Intro> : null}
              <Content
                content={node.description}
                className="mobiledoc-content"
                id="event-content"
              />
            </Campaign.Proposition>
            <FormContainer id="campaign-form-container">
              {resourceType === 'node.campaign.petition' && (
                <CounterContainer>
                  <PetitionCounter
                    current={signatureCount || node.signatureCount}
                    max={500}
                    descriptionText={
                      meta.counterText || 'mensen hebben deze petitie al ondertekend'
                    }
                  />
                </CounterContainer>
              )}
              <FormContainerInner>
                <CampaignForm
                  type={resourceType.split('.')[2]}
                  id={node.id}
                  disabledFields={['terms', 'privacyConsent']}
                  onSubmit={() => {
                    window.location.assign(`${window.location.href}confirm`);
                  }}
                  {...formProps}
                  onLoad={handleCampaignLoad}
                />
              </FormContainerInner>
            </FormContainer>
          </MainContainerInner>
        </MainContainerOuter>
        {resourceType === 'node.campaign.event' && (
          <Campaign.Title style={{ marginBottom: '40px' }} {...props}>
            <EventDetails
              title={<Campaign.Title>Info</Campaign.Title>}
              schedule={node.schedule}
              fee={node.fee}
              location={node.location}
            />
          </Campaign.Title>
        )}
      </React.Fragment>
    );
  };

  static defaultProps = {
    children: [<Campaign.Navigation />, <Campaign.Header />, <Campaign.Main />],
    layout: LayoutDefault,
  };

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
