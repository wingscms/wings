import React from 'react';
import styled, { withTheme } from 'styled-components';

import Section from './Section';
import footerContent from './footerContent';

const Wrap = styled.div`
  background: ${({ theme }) => theme.footerBackgroundColor};
  width: 100%;
  display: block;
  text-align: center;
  padding: 40px 0 80px 0;
  @media screen and (min-width: 800px) {
    padding: 80px 40px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  background: ${({ theme }) => theme.footerBackgroundColor};
  align-items: flex-start;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    margin: 0;
  }
  > * {
    width: 20%;
    max-width: 20%;
    min-width: 20%;
    flex-basis: auto;
    @media screen and (max-width: 1080px) {
      width: 50%;
      max-width: 50%;
      min-width: 50%;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }
`;

const CTASection = styled(Section)`
  font-weight: bolder;
  font-size: 24px;
  line-height: 1.2;
`;

const BolsterLink = styled.a`
  display: inline-block;
  margin: 0 auto 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  color: ${({ theme }) => theme.footerLinkColor};
  text-decoration: none;
  font-size: 12px;
  background-image: none;
  @media screen and (max-width: 800px) {
    text-align: left;
    margin: 40px 0 0 0;
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  max-height: 80px;
`;

export default withTheme(({ theme }) => (
  <Wrap>
    <Container>
      {theme.footerTitle || theme.footerLogoUrl ? (
        <CTASection>
          {theme.footerTitle}
          {theme.footerLogoUrl ? (
            <a href={theme.footerLogoLink || '/'}>
              <Logo src={theme.footerLogoUrl} alt="logo" />
            </a>
          ) : null}
        </CTASection>
      ) : null}
      {footerContent(theme.footerContent)}
    </Container>
    <BolsterLink href="https://wings.dev">Powered by Wings</BolsterLink>
    <BolsterLink href="https://bureaubolster.nl">
      Made with{' '}
      <span role="img" aria-label="heart emoji">
        ❤️
      </span>{' '}
      at Bolster
    </BolsterLink>
  </Wrap>
));
