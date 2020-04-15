import React, { useState, useRef } from 'react';
import { Counter } from '@wingscms/components';
import styled from '../../lib/styled';

import { t } from '../../theme';
import { useIntl } from '../../ctx/Intl';

import Content from '../MobiledocRenderer';
import CampaignForm from './Form';
import EventDetails from './EventDetails';
import Proposition from './Proposition';

const Container = styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${t(_ => _.backgroundColor)};
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
  margin-bottom: ${t(_ => _.largeSpacing)};
  @media screen and (max-width: 800px) {
    margin-bottom: ${t(_ => _.mediumSpacing)};
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
  background-color: ${t(_ => _.campaignFormBackgroundColor)};
  color: ${t(_ => _.campaignFormTextColor)};
  vertical-align: top;
  border-radius: 4px;
  box-shadow: ${t(_ => _.shadow)};
  align-self: flex-start;
  a {
    color: ${t(_ => _.campaignFormLinkTextColor)};
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${t(_ => _.campaignFormLinkLineColor)} 0%,
      ${t(_ => _.campaignFormLinkLineColor)} 100%
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
        ${t(_ => _.campaignFormLinkLineColor)} 0%,
        ${t(_ => _.campaignFormLinkLineColor)} 100%
      );
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const FormContainerInner = styled.div`
  padding: ${t(_ => _.mediumSpacing)};
  display: block;
  @media screen and (max-width: 1000px) {
    padding: ${t(_ => _.smallSpacing)};
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: ${t(_ => _.uppercaseTitles)};
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
const CounterContainer = styled.div`
  background-color: ${t(_ => _.counterBackgroundColor)};
  color: ${t(_ => _.counterTextColor)};
  border-radius: 4px 4px 0 0;
  padding: ${t(_ => `${_.smallSpacing} ${_.mediumSpacing}`)};
  width: 100%;
  @media screen and (max-width: 1000px) {
    padding: ${t(_ => _.smallSpacing)};
  }
`;

export default ({
  id,
  resourceType,
  node: _node = {},
  formProps = {},
  wrapElement = e => e,
  redirectUrlForNode = () => null,
  copy = {},
  signatureCount: _signatureCount,
  signatureGoal: _signatureGoal,
  ...props
}) => {
  const intl = useIntl();
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
  const { fee, schedule } = node;

  const {
    descriptionCollapse = intl.formatMessage('wings.Campaign.description.collapse'),
    descriptionExpand = intl.formatMessage('wings.Campaign.description.expand'),
    petitionCounterMessage = intl.formatMessage('wings.Campaign.petitionCounter.message', {
      signatureCount,
    }),
    petitionCounterGoalText = signatureGoal ? intl.formatNumber(signatureGoal) : null,
    fundraiserTargetText = fundraiserTarget
      ? `${fundraiserTarget.currency.symbol}${intl.formatNumber(fundraiserTarget.amount / 100)}`
      : null,
    fundraiserCounterMessage = intl.formatMessage('wings.Campaign.fundraiserCounter.message'),
    eventInfoTitle = intl.formatMessage('wings.Campaign.eventInfo.title'),
    eventStartLabel = intl.formatMessage('wings.Campaign.eventStart.label'),
    eventEndLabel = intl.formatMessage('wings.Campaign.eventEnd.label'),
    eventLocationLabel = intl.formatMessage('wings.Campaign.eventLocation.label'),
    eventFeeLabel = intl.formatMessage('wings.Campaign.eventFee.label'),
    eventStartTime = schedule?.start
      ? `${intl.formatDate(new Date(schedule.start))} ${intl.formatTime(new Date(schedule.start))}`
      : null,
    eventEndTime = schedule?.end
      ? `${intl.formatDate(new Date(schedule.end))} ${intl.formatTime(new Date(schedule.end))}`
      : null,
    eventFee = fee
      ? intl.formatNumber(fee.amount.amount / 100, {
          style: 'currency',
          currency: fee.amount.currency.id,
          currencyDisplay: 'symbol',
        })
      : null,
  } = copy;
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
                  current={_signatureCount || signatureCount}
                  goal={_signatureGoal || signatureGoal}
                  description={petitionCounterMessage}
                  goalText={petitionCounterGoalText}
                />
              </CounterContainer>
            )}
            {/* Fundraiser counter */}
            {fundraiserRaised &&
              typeof fundraiserRaised.amount === 'number' &&
              node.resourceType === 'node.fundraiser' && (
                <CounterContainer>
                  <Counter
                    current={fundraiserRaised.amount / 100}
                    goal={fundraiserTarget.amount / 100}
                    description={fundraiserCounterMessage}
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
