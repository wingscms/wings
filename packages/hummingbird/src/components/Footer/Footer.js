import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { usePluginOptions } from '../../ctx/PluginOptions';

import Section from './Section';
import FooterColumns from './FooterColumns';

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

  .title {
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  }
`;

const BolsterLink = styled.a`
  display: block;
  margin: 0 auto 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.footerTextColor};
  text-decoration: none;
  font-size: 12px;
  background-image: none;
  @media screen and (max-width: 800px) {
    text-align: left;
    padding: 0 20px;
  }
`;

const BolsterLinkContainer = styled.div`
  display: block;
  min-width: 100%;
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Logo = styled.img`
  max-height: 80px;
`;

const LoveEmoji = () => (
  <FormattedMessage
    id="hummingbird.Footer.madeBy.emoji"
    description="Love Emoji"
    defaultMessage="love"
  >
    {txt => (
      <span role="img" aria-label={txt}>
        ❤️
      </span>
    )}
  </FormattedMessage>
);

const Footer = ({ theme }) => {
  const { footer = {} } = usePluginOptions();
  return (
    <Wrap>
      <Container>
        {footer.title || theme.logoImageUrl ? (
          <CTASection>
            <h2 className="title">{footer.title}</h2>
            <div>
              {theme.footerLogoImageUrl && (
                <a href={footer.logoLink || '/'}>
                  <Logo src={theme.footerLogoImageUrl} alt="logo" />
                </a>
              )}
            </div>
          </CTASection>
        ) : null}
        <FooterColumns columns={footer.columns} />
        <BolsterLinkContainer>
          <BolsterLink href="https://wings.dev">
            <FormattedMessage
              id="hummingbird.Footer.poweredBy.message"
              description="Powered by Wings message"
              defaultMessage="Powered by Wings"
            />
          </BolsterLink>
          <BolsterLink href="https://bolster.digital">
            <FormattedMessage
              id="hummingbird.Footer.madeBy.message"
              description="Made by Bolster message"
              defaultMessage="Made with {love} at Bolster"
              values={{
                love: <LoveEmoji />,
              }}
            />
          </BolsterLink>
        </BolsterLinkContainer>
      </Container>
    </Wrap>
  );
};

export default withTheme(Footer);
