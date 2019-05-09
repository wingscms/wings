import React, { Component } from 'react';
import { createCard } from '@wingscms/react';
import { FlexGrid } from '@wingscms/crane';
import styled from 'styled-components';

import { Facebook, Globe, Instagram, Linkedin, Twitter } from '../img/svg/social';

const Title = styled.h3`
  color: ${({ theme }) => theme.headingColor};
  font-size: 40px;
  line-height: 42px;
  font-weight: bold;
  @media screen and (max-width: 645px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const OrganisationContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: white;
  position: relative;
  margin-bottom: 30px;
  height: auto;
`;

const OrganisationImage = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 30%;
  vertical-align: middle;
  margin-bottom: 0;
  @media screen and (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const OrganisationContent = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 70%;
  vertical-align: middle;
  padding: 0 20px;
  @media screen and (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
`;

const OrganisationName = styled.h3`
  color: ${({ theme }) => theme.textColor};
  text-align: left;
  padding: 0;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const OrganisationDescription = styled.p`
  line-height: 25px;
  font-size: 16px;
  margin-top: 10px;
`;

const PersonContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: white;
  position: relative;
  margin-bottom: 30px;
  height: auto;
`;

const PersonImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const PersonName = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-weight: 800;
  text-align: center;
  padding: 0;
`;

const ProfilesWrapper = styled.div`
  width: 100%;
  text-align: center;
  a {
    background-image: none;
  }
  & > * {
    display: inline;
  }
`;

const OrgProfilesWrapper = styled(ProfilesWrapper)`
  text-align: left;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  display: inline-block;
  > svg {
    width: 17px;
    height: 17px;
    margin: 10px 5px;
  }
`;

const StyledFlexGrid = styled(FlexGrid)`
  background-color: ${({ theme }) => theme.appBackgroundColor};
  padding: 10px;
`;

class CollectionCardView extends Component {
  mapOrganisations() {
    return this.props.items.map((x, i) => (
      // eslint-disable-next-line
      <OrganisationContainer key={x._id} index={i}>
        {x.image ? <OrganisationImage src={x.image.url} /> : null}
        <OrganisationContent>
          {x.name ? <OrganisationName>{x.name}</OrganisationName> : null}
          {x.description ? (
            <OrganisationDescription>{x.description.text}</OrganisationDescription>
          ) : null}
          {x.profiles && (
            <OrgProfilesWrapper>
              {x.profiles.website ? (
                <a href={x.profiles.website.url} target="_blank" rel="noopener noreferrer">
                  <ProfileImage>
                    <Globe />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.facebook ? (
                <a href={x.profiles.facebook.url} target="_blank" rel="noopener noreferrer">
                  <ProfileImage>
                    <Facebook />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.linkedIn ? (
                <a href={x.profiles.linkedIn.url} target="_blank" rel="noopener noreferrer">
                  <ProfileImage>
                    <Linkedin />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.instagram ? (
                <a
                  href={`https://www.instagram.com/${x.profiles.instagram.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProfileImage>
                    <Instagram />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.twitter ? (
                <a
                  href={`http://www.twitter.com/${x.profiles.twitter.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProfileImage>
                    <Twitter />
                  </ProfileImage>
                </a>
              ) : null}
            </OrgProfilesWrapper>
          )}
        </OrganisationContent>
      </OrganisationContainer>
    ));
  }

  mapPersons() {
    return this.props.items.map((x, i) => (
      // eslint-disable-next-line
      <PersonContainer key={x._id} index={i}>
        {x.image ? <PersonImg src={x.image.url} /> : null}
        {x.name ? <PersonName>{x.name}</PersonName> : null}
        {x.profiles ? (
          <ProfilesWrapper>
            {x.profiles.website ? (
              <a href={x.profiles.website.url} target="_blank" rel="noopener noreferrer">
                <ProfileImage>
                  <Globe />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.facebook ? (
              <a href={x.profiles.facebook.url} target="_blank" rel="noopener noreferrer">
                <ProfileImage>
                  <Facebook />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.linkedIn ? (
              <a href={x.profiles.linkedIn.url} target="_blank" rel="noopener noreferrer">
                <ProfileImage>
                  <Linkedin />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.instagram ? (
              <a
                href={`https://www.instagram.com/${x.profiles.instagram.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProfileImage>
                  <Instagram />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.twitter ? (
              <a
                href={`http://www.twitter.com/${x.profiles.twitter.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProfileImage>
                  <Twitter />
                </ProfileImage>
              </a>
            ) : null}
          </ProfilesWrapper>
        ) : null}
      </PersonContainer>
    ));
  }

  returnCollection() {
    switch (this.props.type) {
      case 0:
        return this.renderPersonsCollection();
      case 1:
        return this.renderOrganisationsCollection();
      default:
        return null;
    }
  }

  renderPersonsCollection() {
    return (
      <div>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <StyledFlexGrid
          divisions={3}
          margins={10}
          alignItems="stretch"
          style={{ marginLeft: '-20px', width: 'calc(100% + 40px)' }}
        >
          {this.mapPersons()}
        </StyledFlexGrid>
      </div>
    );
  }

  renderOrganisationsCollection() {
    return (
      <div>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <StyledFlexGrid
          divisions={1}
          margins={10}
          alignItems="stretch"
          style={{ marginLeft: '-20px', width: 'calc(100% + 40px)' }}
        >
          {this.mapOrganisations()}
        </StyledFlexGrid>
      </div>
    );
  }

  render() {
    return <div>{this.returnCollection()}</div>;
  }
}

export default createCard({
  name: 'CollectionCard',
  renderWith: CollectionCardView,
});
