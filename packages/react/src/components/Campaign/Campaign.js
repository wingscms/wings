import React, { useState, useRef } from 'react';
import styled from '../../lib/styled';

import Content from '../MobiledocRenderer';
import CampaignForm from './Form';
import Counter from './Counter';
import EventDetails from './EventDetails';
import Proposition from './Proposition';

const Container = styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor || 'transparent'};
`;

const NodeFragment = `
  fragment NodeFields on Node {
    id
    title
    resourceType
    slug
    locale {
      id
      name
      primary
    }
    image {
      id
      name
      caption
      alt
      key
      url
    }
    meta {
      key
      value
    }
    data {
      key
      data
    }
    status
    nodeType
  }`;

const CampaignFragment = `
  fragment CampaignFields on Campaign {
    intro
    description
  }
`;

const MainContainerOuter = styled(Container)`
  background-color: transparent;
  overflow: auto;
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  @media screen and (max-width: 800px) {
    margin-bottom: ${({ theme }) => theme.mediumSpacing};
  }
`;

const MainContainerInner = styled(Container)`
  background-color: transparent;
  max-width: 1160px;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const FormContainer = styled.div`
  display: inline-block;
  width: 460px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.campaignFormBackgroundColor};
  color: ${({ theme }) => theme.campaignFormTextColor};
  vertical-align: top;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  align-self: flex-start;
  a {
    color: ${({ theme }) => theme.campaignFormLinkTextColor};
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.campaignFormLinkLineColor} 0%,
      ${({ theme }) => theme.campaignFormLinkLineColor} 100%
    );
    padding-bottom: 2px;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0% 100%;
    transition: background-size 0.1s linear;
    &:hover,
    &:focus {
      background-size: 100% 4px;
      background-image: linear-gradient(
        120deg,
        ${({ theme }) => theme.campaignFormLinkLineColor} 0%,
        ${({ theme }) => theme.campaignFormLinkLineColor} 100%
      );
    }
  }
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
  font-size: 2rem;
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const Intro = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;
const CounterContainer = styled(FormContainerInner)`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.counterBackgroundColor};
  color: ${({ theme }) => theme.counterTextColor};
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const DEFAULT_COPY = {
  descriptionCollapse: 'Collapse proposition button text',
  descriptionExpand: 'Expand proposition button text',
  eventInfoTitle: 'Title for Event metadata',
  eventStartLabel: 'Label for Event Start date',
  eventEndLabel: 'Label for Event End date',
  eventLocationLabel: 'Label for Event Location',
  eventFeeLabel: 'Label for Event Fee',
  counterMessage: 'other people signed this petition',
};

export default ({
  id,
  resourceType,
  node: _node = {},
  formProps = {},
  wrapElement = e => e,
  redirectUrlForNode = () => null,
  copy = {},
  ...props
}) => {
  const campaignContainerRef = useRef(null);
  const formContainerRef = useRef(null);
  const [signatureCount, setSignatureCount] = useState(null);
  const [signatureGoal, setSignatureGoal] = useState(0);
  const [fundraiserRaised, setFundraiserRaised] = useState(null);
  const [fundraiserTarget, setFundraiserTarget] = useState(0);
  const [node, setNode] = useState(_node);
  const handleCampaignLoad = campaign => {
    setNode(campaign);
    if (formProps.onLoad) formProps.onLoad(campaign);
    if (resourceType === 'node.petition') {
      setSignatureCount(campaign.signatureCount);
      setSignatureGoal(campaign.signatureGoal);
    }
    if (resourceType === 'node.fundraiser') {
      setFundraiserRaised(campaign.raised);
      setFundraiserTarget(campaign.target);
    }
  };
  const {
    descriptionCollapse,
    descriptionExpand,
    eventInfoTitle,
    eventStartLabel,
    eventEndLabel,
    eventLocationLabel,
    eventFeeLabel,
    eventStartTime,
    eventEndTime,
    eventFee,
    petitionCounterMessage,
    petitionCounterGoalText,
    fundraiserTargetText,
    fundraiserCounterMessage,
  } = { ...DEFAULT_COPY, ...copy };
  const { intro, title } = node;
  const element = (
    <React.Fragment>
      <MainContainerOuter {...props} ref={campaignContainerRef}>
        <MainContainerInner>
          <Proposition
            {...{ descriptionCollapse, descriptionExpand }}
            formContainerRef={formContainerRef}
            campaignContainerRef={campaignContainerRef}
            campaign={node}
          >
            {title ? <Title>{title}</Title> : null}
            {intro ? <Intro fullWidth>{intro}</Intro> : null}
            <Content content={node.description} mini />
          </Proposition>
          <FormContainer ref={formContainerRef}>
            {/* Petition counter */}
            {typeof signatureCount === 'number' && node.resourceType === 'node.petition' && (
              <CounterContainer>
                <Counter
                  current={signatureCount}
                  goal={signatureGoal}
                  descriptionText={petitionCounterMessage}
                  goalText={petitionCounterGoalText}
                />
              </CounterContainer>
            )}
            {/* Fundraiser counter */}
            {fundraiserRaised
              && typeof fundraiserRaised.amount === 'number'
              && node.resourceType === 'node.fundraiser' && (
                <CounterContainer>
                  <Counter
                    current={fundraiserRaised.amount / 100}
                    goal={fundraiserTarget.amount / 100}
                    descriptionText={fundraiserCounterMessage}
                    goalText={fundraiserTargetText}
                    symbol={fundraiserRaised.currency.symbol}
                  />
                </CounterContainer>
            )}
            <FormContainerInner>
              <CampaignForm
                type={resourceType.split('.')[1]}
                id={id}
                node={node}
                redirectUrl={redirectUrlForNode(node)}
                {...formProps}
                onLoad={handleCampaignLoad}
                nodeFragment={NodeFragment}
                campaignFragment={CampaignFragment}
              />
            </FormContainerInner>
          </FormContainer>
        </MainContainerInner>
      </MainContainerOuter>
      {resourceType === 'node.event' && (node.schedule || node.fee || node.location) && (
        <EventDetails
          title={<Title>{eventInfoTitle}</Title>}
          location={node.location}
          {...{
            eventStartLabel,
            eventEndLabel,
            eventLocationLabel,
            eventFeeLabel,
            eventStartTime,
            eventEndTime,
            eventFee,
          }}
        />
      )}
    </React.Fragment>
  );
  return wrapElement(element, node);
};
