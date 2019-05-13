import React, { Component } from 'react';
import styled from 'styled-components';

import PetitionForm, { PetitionCounter } from './Petition/PetitionForm';
import { EventForm } from './Event';
import AnchorButton from './AnchorButton';
import Content from './Content';
import Container from './Container';

import wings from '../data/wings';
import { metaToObject } from '../../lib/utils';

import arrowDown from '../img/arrowdown.png';
import arrowUp from '../img/arrowup.png';

const queryPetition = `
  query GetPeititionInfo($id: String!) {
    signup: petition(id: $id) {
      id
      intro
      title
      description
      slug
      image {
        url
      }
      meta {
        key
        value
      }
      signatureCount
    }
  }
`;

const queryEvent = `
  query GetEventInfo($id: String!) {
    signup: event(id: $id) {
      id
      intro
      title
      description
      slug
      image {
        url
      }
      meta {
        key
        value
      }
    }
  }
`;

const windowExists = typeof window !== 'undefined';

const Arrow = styled.img`
  height: 14px;
  margin-bottom: 0;
  margin-left: 10px;
`;

const BackgroundContainer = styled(Container)`
  background-image: url(${props => props.useBackgroundImage && props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px;
  height: 100vh;
  max-height: 700px;
  position: relative;
  margin-bottom: -20%;
  @media screen and (max-width: 800px) {
    height: 60vh;
  }
  @media screen and (max-width: 800px) and (max-height: 720px) {
    height: 60vh;
  }
  @media screen and (max-width: 800px) and (max-height: 530px) {
    height: 100vh;
  }
  > div {
    padding: 20px 20px;
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
  }
`;

const ContainerOuter = styled.div`
  background-image: ${({ signupImage, useBackgroundImage }) =>
    (useBackgroundImage ? `url(${signupImage})` : '')};
  background-color: ${({ useBackgroundImage, backgroundColor }) =>
    (!useBackgroundImage ? backgroundColor || '#fcfcfc' : '')};
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  display: block;
  margin: ${({ useBackgroundImage }) => (useBackgroundImage ? '40px auto' : '80px auto')};
  padding: ${({ useBackgroundImage }) => (useBackgroundImage ? '0' : '0')};
  height: auto;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    padding: 10px;
    padding: ${({ useBackgroundImage }) => (useBackgroundImage ? '0' : '10px')};
  }
  @media screen and (max-width: 600px) {
    padding: ${({ useBackgroundImage }) => (useBackgroundImage ? '0' : '10px')};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: block;
  max-width: 1160px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
`;

const ContainerHalf = styled.div`
  background-color: ${({ backgroundColor, theme }) =>
    (backgroundColor === 'primary' ? theme.primaryColor : backgroundColor)};
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 50%;
  vertical-align: top;
  overflow: ${({ left }) => (left ? 'hidden' : 'initial')};
  box-shadow: ${({ left }) => (left ? 'initial' : '0 0 10px rgba(0, 0, 0, 0.2)')};
  padding: ${({ left }) => (left ? '40px' : 'initial')};
  padding-bottom: ${({ expandable }) => (expandable ? '100px' : '40px')};
  max-height: ${props =>
    (!props.show && props.height && props.expandable ? `${props.height - 80}px` : 'none')};
  @media screen and (min-width: 1000px) {
    border-radius: ${({ left }) => (left ? '4px 0 0 4px' : '4px 4px 4px 4px')};
    margin-top: ${({ right }) => (right ? '-40px' : '0')};
    margin-bottom: ${({ right }) => (right ? '-40px' : '0')};
    p,
    ul,
    ol {
      font-size: 18px;
    }
    h1,
    h2,
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    display: block;
    border-radius: 4px;
    padding: ${({ left }) => (left ? '20px' : 'initial')};
    margin-bottom: ${({ right }) => (right ? '0' : '20px')};
  }
`;

const CounterContainer = styled.div`
  padding: 20px 40px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const FormContainer = styled.div`
  padding: 40px;
  color: ${({ theme }) => theme.darkHeadingColor};
  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 2em;
`;

const ToggleButton = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  padding: 20px 0;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: bold;
  bottom: 0;
  left: 20px;
  z-index: 10;
  background-color: #fcfcfc;
  transition: all 0.1s linear;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    transform: translateY(-100%);
    background: linear-gradient(to top, rgba(252, 252, 252, 1), rgba(252, 252, 252, 0) 50%);
  }
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default class PetitionEmbed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      signup: {},
    };
    this.toggleProposition = this.toggleProposition.bind(this);
  }

  componentWillMount() {
    wings
      .query(this.props.type === 'event' ? queryEvent : queryPetition, {
        id: this.props.signupId,
      })
      .then((res) => {
        this.setState({ signup: res.signup });
      });
  }

  toggleProposition() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const {
      signupId,
      ctaText,
      ctaButtonText,
      type,
      useBackgroundImage,
      backgroundColor,
      expandable,
    } = this.props;
    const { signup, show } = this.state;
    const { title, description, meta, slug, image } = signup;
    const metaObj = meta ? metaToObject(meta) : {};
    const height =
      windowExists && window.document.getElementById(`signup-embed-form-${signupId}`)
        ? window.document.getElementById(`signup-embed-form-${signupId}`).offsetHeight
        : 0;
    return (
      <ContainerOuter backgroundColor={backgroundColor} useBackgroundImage={useBackgroundImage}>
        {useBackgroundImage ? (
          <BackgroundContainer
            useBackgroundImage={useBackgroundImage}
            backgroundImage={image && image.url}
          />
        ) : null}
        <Wrapper>
          <ContainerHalf
            backgroundColor={useBackgroundImage ? '#fcfcfc' : 'transparent'}
            expandable={expandable}
            show={show}
            height={height}
            left
          >
            {title ? <Title>{title}</Title> : null}
            {(ctaText && ctaText.length > 0) || !description ? (
              <p>{ctaText}</p>
            ) : (
              <Content content={description} className="mobiledoc-content petition-description" />
            )}
            <AnchorButton
              href={typeof window !== 'undefined' ? `${window.location.origin}/${slug}` : ''}
              type="ghost"
              size="small"
            >
              {ctaButtonText}
            </AnchorButton>
            {expandable ? (
              <ToggleButton onClick={this.toggleProposition}>
                {show ? (
                  <React.Fragment>
                    Lees minder
                    <Arrow src={arrowUp} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    Lees meer
                    <Arrow src={arrowDown} />
                  </React.Fragment>
                )}
              </ToggleButton>
            ) : null}
          </ContainerHalf>
          <ContainerHalf
            id={`signup-embed-form-${signupId}`}
            backgroundColor="primary"
            useBackgroundImage={useBackgroundImage}
            right
          >
            {type === 'event' ? null : (
              <CounterContainer>
                <PetitionCounter
                  current={signup.signatureCount}
                  max={500}
                  descriptionText={
                    metaObj.counterText || 'mensen hebben deze petitie al ondertekend'
                  }
                />
              </CounterContainer>
            )}
            <FormContainer>
              {type === 'event' ? (
                <EventForm
                  eventSlug={slug}
                  eventId={signupId}
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
                  buttonText={metaObj.signupButtonCopy}
                />
              ) : (
                <PetitionForm
                  actionNetworkHelper={metaObj.actionNetworkHelper}
                  buttonText={metaObj.signupButtonCopy}
                  confirmationText={metaObj.confirmationText}
                  confirmationTitle={metaObj.confirmationTitle}
                  petitionSlug={slug}
                  petitionId={signupId}
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
              )}
            </FormContainer>
          </ContainerHalf>
        </Wrapper>
      </ContainerOuter>
    );
  }
}
