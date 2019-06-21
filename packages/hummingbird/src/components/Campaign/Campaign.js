import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import routing from '../../../services/routing';

import Container from '../Container';
import Content from '../Content';
import CampaignForm from './Form';
import PetitionCounter from './PetitionCounter';
import EventDetails from './EventDetails';
import Proposition from './Proposition';

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
  @media screen and (max-width: 1000px) {
    margin-bottom: 0;
  }
`;

const MainContainerInner = styled(Container)`
  padding-bottom: 40px;
  background-color: transparent;
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
  background-color: ${({ theme }) => theme.campaignFormBackgroundColor};
  color: ${({ theme }) => theme.campaignFormTextColor};
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
  background-color: ${({ theme }) => theme.counterBackgroundColor};
  color: ${({ theme }) => theme.counterTextColor};
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const getUrl = path =>
  (typeof window !== 'undefined' && [window.location.origin, path].join('')) || '';

export default ({ id, resourceType, node: _node = {}, formProps = {}, theme = {}, ...props }) => {
  const [signatureCount, setSignatureCount] = useState(0);
  const [signatureGoal, setSignatureGoal] = useState(0);
  const [node, setNode] = useState(_node);
  const handleCampaignLoad = (campaign) => {
    setNode(campaign);
    if (!(resourceType === 'node.petition')) return;
    setSignatureCount(campaign.signatureCount);
    setSignatureGoal(campaign.signatureGoal);
    if (formProps.onLoad) formProps.onLoad(campaign);
  };
  const { intro, title } = node;
  return (
    <React.Fragment>
      <MainContainerOuter {...props}>
        <MainContainerInner>
          <Proposition>
            {title ? <Title>{title}</Title> : null}
            {intro ? <Intro fullWidth>{intro}</Intro> : null}
            <Content
              content={node.description}
              className="mobiledoc-content"
              id="campaign-content"
            />
          </Proposition>
          <FormContainer id="campaign-form-container">
            {resourceType === 'node.petition' && (
              <CounterContainer>
                <FormattedMessage
                  id="hummingbird.Campaign.counter.message"
                  description="Description for petition counter component"
                  defaultMessage="{signatureCount, plural,
                    one {person has}
                    other {people have}
                } signed this petition"
                  values={{
                    signatureCount,
                  }}
                >
                  {txt => (
                    <PetitionCounter
                      current={signatureCount}
                      max={signatureGoal}
                      descriptionText={txt}
                      theme={theme}
                    />
                  )}
                </FormattedMessage>
              </CounterContainer>
            )}
            <FormContainerInner>
              <CampaignForm
                type={resourceType.split('.')[1]}
                id={id}
                node={node}
                redirectUrl={getUrl(routing.getCampaignConfirmedPath(node))}
                {...formProps}
                onLoad={handleCampaignLoad}
                nodeFragment={NodeFragment}
                campaignFragment={CampaignFragment}
              />
            </FormContainerInner>
          </FormContainer>
        </MainContainerInner>
      </MainContainerOuter>
      {resourceType === 'node.event' && (
        <Title style={{ marginBottom: '40px' }}>
          <EventDetails
            title={
              <Title>
                <FormattedMessage
                  id="hummingbird.Campaign.eventInfo.title"
                  description="Title for Event metadata"
                  defaultMessage="Info"
                />
              </Title>
            }
            schedule={node.schedule}
            fee={node.fee}
            location={node.location}
          />
        </Title>
      )}
    </React.Fragment>
  );
};
