/* eslint-disable no-shadow */

import React, { Component } from 'react';
import styled from 'styled-components';
import Content from '../../components/Content';
import Intro from '../../components/Intro';
import { PetitionCounter } from '../../components/Petition/PetitionForm';
import Container from '../../components/Container';
import CampaignForm from '../../components/CampaignForm';
import Campaign from './Campaign';

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
  min-height: 644px;
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

export default class Petition extends Component {
  static Navigation = Campaign.Navigation;
  static Header = Campaign.Header;
  static Main = class Main extends Component {
    state = {
      signatureCount: null,
    };
    render() {
      const {
        pageContext: {
          node: { title, intro, meta },
          node,
        },
        formProps = {},
      } = this.props;
      const { signatureCount } = this.state;
      return (
        <MainContainerOuter>
          <MainContainerInner>
            <Campaign.Proposition>
              {title && <Title>{title}</Title>}
              {intro && <Intro fullWidth>{intro}</Intro>}
              <Content
                content={node.description}
                className="mobiledoc-content petition-description"
                id="petition-description"
              />
            </Campaign.Proposition>
            <FormContainer id="fb-form-container">
              <CounterContainer>
                <PetitionCounter
                  current={signatureCount || node.signatureCount}
                  max={500}
                  descriptionText={meta.counterText || 'mensen hebben deze petitie al ondertekend'}
                />
              </CounterContainer>
              <FormContainerInner>
                <CampaignForm
                  id={node.id}
                  type="petition"
                  onLoad={p => this.setState({ signatureCount: p.signatureCount })}
                  disabledFields={['terms', 'privacyConsent']}
                  {...formProps}
                />
              </FormContainerInner>
            </FormContainer>
          </MainContainerInner>
        </MainContainerOuter>
      );
    }
  };

  static defaultProps = {
    children: [<Petition.Navigation />, <Petition.Header />, <Petition.Main />],
  };

  render() {
    return <Campaign {...this.props} />;
  }
}
