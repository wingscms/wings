import React, { Component } from 'react';
import styled from 'styled-components';
import Campaign from './Campaign';
import Content from '../../components/Content';
import { InfoContainer } from '../../components/Event';
import CampaignForm from '../../components/CampaignForm';
import { ContentContainer } from '../../components/Petition/ConfirmationPages';
import Container from '../../components/Container';

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

export default class EventTemplate extends Component {
  static Header = Campaign.Header;
  static Navigation = Campaign.Navigation;

  static Main = ({ pageContext: { node }, formProps = {} }) => {
    const { title, intro } = node;
    return (
      <MainContainerOuter>
        <MainContainerInner>
          <Campaign.Proposition>
            {title ? <Title>{title}</Title> : null}
            {intro ? <Intro fullWidth>{intro}</Intro> : null}
            <Content content={node.description} className="mobiledoc-content" id="event-content" />
          </Campaign.Proposition>
          <FormContainer id="fb-form-container">
            <FormContainerInner>
              <CampaignForm type="event" id={node.id} {...formProps} />
            </FormContainerInner>
          </FormContainer>
        </MainContainerInner>
      </MainContainerOuter>
    );
  };
  static Details = ({
    pageContext: {
      node: { schedule, location, fee },
    },
  }) => (
    <ContentContainer style={{ marginBottom: '40px' }}>
      <Title>Info</Title>
      <InfoContainer schedule={schedule} fee={fee} location={location} />
    </ContentContainer>
  );
  static defaultProps = {
    children: [
      <EventTemplate.Navigation />,
      <EventTemplate.Header />,
      <EventTemplate.Main />,
      <EventTemplate.Details />,
    ],
  };
  render() {
    return <Campaign {...this.props} />;
  }
}
