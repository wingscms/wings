import React from 'react';
import { FlexGrid, Icon, _WIDE, Heading, Surface, Text } from '@wingscms/components';
import styled from '../../../lib/styled';
import { t } from '../../../theme';

const Wide = styled.div`
  ${_WIDE}
`;

const WideContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;

const StyledFlexGrid = styled(FlexGrid)`
  background-color: ${t(_ => _.backgroundColor)};
  padding: 10px;
`;

const OrganisationContainer = styled(Surface)`
  display: block;
  padding: ${t(_ => _.smallSpacing)};
  position: relative;
  margin-bottom: 30px;
  height: auto;
`;

const OrganisationImage = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 30%;
  vertical-align: top;
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

const OrganisationName = styled(Heading)`
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};

  text-align: left;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const OrganisationDescription = styled(Text)`
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
  margin-top: 10px;
`;

const PersonContainer = styled(Surface)`
  display: block;
  padding: ${t(_ => _.smallSpacing)};
  position: relative;
  margin-bottom: 30px;
  height: auto;
`;

const PersonImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const PersonName = styled(Heading)`
  color: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
  text-align: center;
  padding: 0;
  margin: 0;
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
    fill: ${t(_ => _.contrastColor({ backgroundColor: _.surfaceBackgroundColor }))};
    width: 17px;
    height: 17px;
    margin: 10px 5px;
  }
`;

export function OrganisationCollection({ title, items }) {
  return (
    <div>
      {title ? <Heading rank={3}>{title}</Heading> : null}
      <StyledFlexGrid
        divisions={1}
        margins={10}
        alignItems="stretch"
        style={{ marginLeft: '-20px', width: 'calc(100% + 40px)' }}
      >
        {items.map((x, i) => (
          // eslint-disable-next-line
          <OrganisationContainer key={x._id} index={i} elevation={1}>
            {x.image ? <OrganisationImage src={x.image.url} /> : null}
            <OrganisationContent>
              {x.name ? <OrganisationName rank={4}>{x.name}</OrganisationName> : null}
              {x.description ? (
                <OrganisationDescription noSpacing>{x.description.text}</OrganisationDescription>
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
        ))}
      </StyledFlexGrid>
    </div>
  );
}

export function PersonCollection({ title, items }) {
  return (
    <div>
      {title ? <Heading rank={3}>{title}</Heading> : null}
      <Wide>
        <WideContentWrap>
          <StyledFlexGrid divisions={4} margins={10} alignItems="stretch" style={{ width: '100%' }}>
            {items.map((x, i) => (
              // eslint-disable-next-line
              <PersonContainer key={x._id} index={i} elevation={1}>
                {x.image ? <PersonImg src={x.image.url} /> : null}
                {x.name ? <PersonName rank={4}>{x.name}</PersonName> : null}
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
            ))}
          </StyledFlexGrid>
        </WideContentWrap>
      </Wide>
    </div>
  );
}
