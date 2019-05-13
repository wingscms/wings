/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuContentWrapper, CloudinaryVideoProvider, Video } from '@wingscms/crane';
import qs from 'qs';

import wings from '../../data/wings';

import Content from '../../components/Content';
import Intro from '../../components/Text/Intro';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

import { makeShareUrls } from '../../../lib/utils';

import PetitionForm, {
  PetitionCounter,
  PetitionProposition as _PetitionProposition,
} from '../../components/Petition/PetitionForm';

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
  overflow: visible;
`;

const MainContainerInner = styled(Container)`
  max-width: 1160px;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 20px;
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

const CounterContainer = styled(FormContainerInner)`
  padding: 20px 40px;
  background-color: #fff;
  color: #000;
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

const VideoContainer = styled.div`
  width: calc(100% - 540px);
  position: absolute;
  transform: translateY(-100%);
  @media screen and (max-width: 1000px) {
    position: relative;
    width: calc(100% - 0px);
    transform: translateY(0);
  }
`;

export default class extends Component {
  constructor({ pageContext: { petition }, location }) {
    super();
    this.state = {
      loading: true,
      shareUrls: makeShareUrls(petition.platforms, location.href || '', petition.meta),
      petition,
    };
  }

  componentDidMount() {
    wings
      .query(
        `
        query Petition ($id: String!) {
          petition(id: $id) {
            signatureCount
          }
        }
        `,
        { id: this.props.pageContext.petition.id },
      )
      .then(({ petition: { signatureCount = 0 } = {} }) => {
        this.setState(({ petition }) => ({
          petition: { ...petition, signatureCount },
          loading: false,
        }));
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  getQueryParams = () => qs.parse((this.props.location.search || '').replace('?', ''));

  render() {
    // eslint-disable-next-line
    const { shareUrls, loading, error, petition = {} } = this.state;
    const { title, intro, meta } = petition;
    const metaObj = meta;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="petition">
          <Wrapper>
            <Navigation shareUrls={shareUrls} items={petition.menu && petition.menu.items} />
            <BackgroundContainerTop backgroundImage={petition.image ? petition.image.url : ''} />
            <MainContainerOuter>
              <MainContainerInner>
                {metaObj.cloudinaryVideoCloud && metaObj.cloudinaryVideoId ? (
                  <VideoContainer>
                    <CloudinaryVideoProvider
                      cloudName={metaObj.cloudinaryVideoCloud}
                      videoId={metaObj.cloudinaryVideoId}
                    >
                      <Video
                        poster={`//res.cloudinary.com/${
                          metaObj.cloudinaryVideoCloud
                        }/video/upload/vc_auto/${metaObj.cloudinaryVideoId}.jpg`}
                        autoplay={metaObj.cloudinaryVideoAutoplay ? 'autoplay' : null}
                        muted={metaObj.cloudinaryVideoAutoplay ? 'muted' : null}
                        playsinline="playsinline"
                      />
                    </CloudinaryVideoProvider>
                  </VideoContainer>
                ) : null}
                <PetitionProposition>
                  {title && <Title>{title}</Title>}
                  {intro && <Intro fullWidth>{intro}</Intro>}
                  <Content
                    content={petition.description}
                    className="mobiledoc-content petition-description"
                    id="petition-description"
                  />
                </PetitionProposition>
                <FormContainer id="fb-form-container">
                  <CounterContainer>
                    <PetitionCounter
                      current={petition.signatureCount}
                      max={500}
                      descriptionText={
                        metaObj.counterText || 'mensen hebben deze petitie al ondertekend'
                      }
                    />
                  </CounterContainer>
                  <FormContainerInner>
                    <PetitionForm
                      onError={() => this.setState({ error: true })}
                      petitionId={`${petition.id}`}
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
            <Footer />
          </Wrapper>
        </MenuContentWrapper>
      </Layout>
    );
  }
}
