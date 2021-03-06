import React, { useState, useRef } from 'react';
import { Counter, Heading, Text, Surface as _Surface } from '@wingscms/components';
import fP from 'filter-invalid-dom-props';
import styled from '../../lib/styled';

import { t } from '../../theme';
import { useIntl, createIntl } from '../../ctx/Intl';

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
    copy {
      message {
        messageId
        description
        message
      }
    }
  }`;

const CampaignFragment = `
  fragment CampaignFields on Campaign {
    intro
    description
  }
`;

const MainContainerOuter = styled(Container)`
  background-color: transparent;
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
  padding: ${t(_ => _.smallSpacing)};
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FORM_WIDTH = '460px';

const FormSurface = styled(_Surface)`
  display: inline-block;
  width: ${FORM_WIDTH};
  background-color: ${t(_ => _.campaignFormBackgroundColor)};
  color: ${t(_ => _.campaignFormTextColor)};
  vertical-align: top;
  align-self: flex-start;
  position: relative;
  z-index: 1;
  /* TODO: use Link component instead of vanilla <a> */
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
  font-family: ${t(_ => _.textFontFamily)};
  display: block;
  @media screen and (max-width: 1000px) {
    padding: ${t(_ => _.smallSpacing)};
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const Intro = styled(Text)`
  font-weight: bold;
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const CounterSurface = styled(_Surface)`
  background-color: ${t(_ => _.counterBackgroundColor)};
  border-radius: ${t(_ => `${_.surfaceBorderRadius} ${_.surfaceBorderRadius} 0 0`)};
  color: ${t(_ => _.counterTextColor)};
  padding: ${t(_ => `${_.smallSpacing} ${_.mediumSpacing}`)};
  width: 100%;
  @media screen and (max-width: 1000px) {
    padding: ${t(_ => _.smallSpacing)};
  }
`;

export default function Campaign({
  id,
  headingRank = 1,
  resourceType,
  node: _node = {},
  formProps = {},
  wrapElement = e => e,
  redirectUrlForNode = () => null,
  copy = {},
  signatureCount: _signatureCount,
  signatureGoal: _signatureGoal,
  ...props
}) {
  const _intl = useIntl();
  const [intl, setIntl] = useState(_intl);
  const campaignContainerRef = useRef(null);
  const formContainerRef = useRef(null);
  const [signatureCount, setSignatureCount] = useState(null);
  const [signatureGoal, setSignatureGoal] = useState(0);
  const [fundraiserRaised, setFundraiserRaised] = useState(null);
  const [fundraiserTarget, setFundraiserTarget] = useState(0);
  const [node, setNode] = useState(_node);
  const [formHeight, setFormHeight] = useState(formContainerRef?.current?.offsetHeight);
  const handleCampaignLoad = campaign => {
    if (campaign.copy) {
      const newIntl = createIntl(campaign);
      setIntl(newIntl);
    }
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
  const { intro, title, description } = node;
  const element = (
    <MainContainerOuter {...fP(props)} ref={campaignContainerRef}>
      <MainContainerInner>
        <Proposition
          {...{ descriptionCollapse, descriptionExpand }}
          height={formHeight - 80}
          onToggle={show => {
            if (!campaignContainerRef?.current || show) return;
            campaignContainerRef?.current?.scrollIntoView?.({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          formWidth={FORM_WIDTH}
          elevation={1}
        >
          {!(title || intro || description) ? null : (
            <>
              {title ? <Heading rank={headingRank}>{title}</Heading> : null}
              {intro ? <Intro fullWidth>{intro}</Intro> : null}
              <Content content={description} mini />
            </>
          )}
        </Proposition>
        <FormSurface ref={formContainerRef} elevation={2}>
          {/* Petition counter */}
          {typeof signatureCount === 'number' && node.resourceType === 'node.petition' && (
            <CounterSurface>
              <Counter
                current={_signatureCount || signatureCount}
                goal={_signatureGoal || signatureGoal}
                description={petitionCounterMessage}
              />
            </CounterSurface>
          )}
          {/* Fundraiser counter */}
          {fundraiserRaised &&
            typeof fundraiserRaised.amount === 'number' &&
            node.resourceType === 'node.fundraiser' && (
              <CounterSurface>
                <Counter
                  current={fundraiserRaised.amount / 100}
                  goal={fundraiserTarget.amount / 100}
                  description={fundraiserCounterMessage}
                  symbol={fundraiserRaised.currency.symbol}
                />
              </CounterSurface>
            )}
          <FormContainerInner>
            <CampaignForm
              type={resourceType.split('.')[1]}
              id={id}
              node={node}
              redirectUrl={redirectUrlForNode(node)}
              {...formProps}
              onLoad={handleCampaignLoad}
              onUpdate={() => setFormHeight(formContainerRef?.current?.offsetHeight)}
              nodeFragment={NodeFragment}
              campaignFragment={CampaignFragment}
            />
          </FormContainerInner>
        </FormSurface>
      </MainContainerInner>
      {resourceType === 'node.event' && (node.schedule || node.fee || node.location) && (
        <EventDetails
          title={<Heading rank={2}>{eventInfoTitle}</Heading>}
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
    </MainContainerOuter>
  );
  return wrapElement(element, node);
}
