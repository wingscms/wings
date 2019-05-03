/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper } from '@wingscms/crane';
import qs from 'qs';

import Content from '../../components/Content';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import { InfoContainer, EventForm } from '../../components/Event';

import { makeShareUrls } from '../../../lib/utils';

import { PetitionProposition as _PetitionProposition } from '../../components/Petition/PetitionForm';
import { ContentContainer } from '../../components/Petition/ConfirmationPages';

import Container from '../../components/Container';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.appBackgroundColor};
`;

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

const PetitionProposition = styled(_PetitionProposition)``;

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

export default class extends Component {
  constructor({ pageContext: { event }, location }) {
    super();
    this.state = {
      loading: true,
      shareUrls: makeShareUrls(event.platforms, location.href || '', event.meta),
      event,
    };
  }

  getQueryParams = () => qs.parse((this.props.location.search || '').replace('?', ''));

  render() {
    // eslint-disable-next-line
    const { shareUrls, loading, error, event } = this.state;
    const { title, intro, schedule, fee, location, meta } = event;
    const metaObj = meta;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="petition">
          <Wrapper>
            <Navigation shareUrls={shareUrls} items={event.menu && event.menu.items} />
            <BackgroundContainerTop backgroundImage={event.image ? event.image.url : ''} />
            <MainContainerOuter>
              <MainContainerInner>
                <PetitionProposition>
                  {title ? <Title>{title}</Title> : null}
                  {intro ? <Intro>{intro}</Intro> : null}
                  <Content
                    content={event.description}
                    className="article-body petition-description"
                    id="article-body"
                  />
                </PetitionProposition>
                <FormContainer id="fb-form-container">
                  <FormContainerInner>
                    <EventForm
                      onError={() => this.setState({ error: true })}
                      eventId={`${event.id}`}
                      loading={loading}
                      privacyLink={metaObj.privacyLink}
                      privacyText={metaObj.privacyText}
                      formTitle={metaObj.formTitle}
                      keepMeUpdatedText={metaObj.keepMeUpdatedText}
                      buttonText={metaObj.signupButtonCopy}
                      actionNetworkHelper={metaObj.actionNetworkHelper}
                      confirmationText={metaObj.confirmationText}
                      confirmationTitle={metaObj.confirmationTitle}
                      firstNameLabel={metaObj.firstNameLabel}
                      firstNamePlaceholder={metaObj.firstNamePlaceholder}
                      lastNameLabel={metaObj.lastNameLabel}
                      lastNamePlaceholder={metaObj.lastNamePlaceholder}
                      emailLabel={metaObj.emailLabel}
                      emailPlaceholder={metaObj.emailPlaceholder}
                      newsletterLabel={metaObj.newsletterLabel}
                      newsletterOptions={metaObj.newsletterOptions}
                      newsletterNotice={metaObj.newsletterNotice}
                    />
                  </FormContainerInner>
                </FormContainer>
              </MainContainerInner>
            </MainContainerOuter>
            <ContentContainer style={{ marginBottom: '40px' }}>
              <Title>Info</Title>
              <InfoContainer schedule={schedule} fee={fee} location={location} />
            </ContentContainer>
            <Footer />
          </Wrapper>
        </MenuContentWrapper>
      </Layout>
    );
  }
}
