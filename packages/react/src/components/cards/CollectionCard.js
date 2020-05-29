import React, { Component } from 'react';

import { FlexGrid, Icon, _WIDE } from '@wingscms/components';
import styled from '../../lib/styled';
import createCard from '../../createCard';
import { t } from '../../theme';

const Wide = styled.div`
  ${_WIDE}
`;

const WideContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;

const Title = styled.h3`
  color: ${t(_ => _.textColor)};
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
  background-color: ${t(_ => _.elementBackgroundColor)};
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
  color: ${t(_ => _.textColor)};
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
  background-color: ${t(_ => _.elementBackgroundColor)};
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
  color: ${t(_ => _.textColor)};
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
  background-color: ${t(_ => _.backgroundColor)};
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
                    <Icon icon="globe" />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.facebook ? (
                <a href={x.profiles.facebook.url} target="_blank" rel="noopener noreferrer">
                  <ProfileImage>
                    <Icon icon="facebook" />
                  </ProfileImage>
                </a>
              ) : null}
              {x.profiles.linkedIn ? (
                <a href={x.profiles.linkedIn.url} target="_blank" rel="noopener noreferrer">
                  <ProfileImage>
                    <Icon icon="linkedin" />
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
                    <Icon icon="instagram" />
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
                    <Icon icon="twitter" />
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
                  <Icon icon="globe" />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.facebook ? (
              <a href={x.profiles.facebook.url} target="_blank" rel="noopener noreferrer">
                <ProfileImage>
                  <Icon icon="facebook" />
                </ProfileImage>
              </a>
            ) : null}
            {x.profiles.linkedIn ? (
              <a href={x.profiles.linkedIn.url} target="_blank" rel="noopener noreferrer">
                <ProfileImage>
                  <Icon icon="linkedin" />
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
                  <Icon icon="instagram" />
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
                  <Icon icon="twitter" />
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
      <>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <Wide>
          <WideContentWrap>
            <StyledFlexGrid
              divisions={4}
              margins={10}
              alignItems="stretch"
              style={{ width: '100%' }}
            >
              {this.mapPersons()}
            </StyledFlexGrid>
          </WideContentWrap>
        </Wide>
      </>
    );
  }

  renderOrganisationsCollection() {
    return (
      <>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <StyledFlexGrid
          divisions={1}
          margins={10}
          alignItems="stretch"
          style={{ marginLeft: '-20px', width: 'calc(100% + 40px)' }}
        >
          {this.mapOrganisations()}
        </StyledFlexGrid>
      </>
    );
  }

  render() {
    return this.returnCollection();
  }
}

export default createCard({
  name: 'CollectionCard',
  renderWith: CollectionCardView,
});
