import React from 'react';
import styled from '../../lib/styled';
import { t, useTheme } from '../../theme';
import { useIntl } from '../../ctx/Intl';

import Section from './Section';
import FooterColumns from './FooterColumns';

const Wrap = styled.div`
  background-color: ${t((_, { backgroundColor }) => backgroundColor || _.footerBackgroundColor)};
  color: ${t((_, { color }) => color || _.footerTextColor)};
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
  background-color: inherit;
  color: inherit;
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
    text-transform: ${t(_ => _.uppercaseTitles)};
  }
`;

const BolsterLink = styled.a`
  display: block;
  margin: 0 auto 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  font-size: 12px;
  background-image: none;
  @media screen and (max-width: 800px) {
    text-align: left;
    padding: 0 20px;
  }
`;

const BolsterLinkContainer = styled.div`
  color: inherit;
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

const Footer = ({ backgroundColor, children, color, columns, copy = {}, logo = {}, title }) => {
  const _ = useTheme();
  const intl = useIntl();

  const {
    poweredBy = intl.formatMessage('wings.Footer.poweredBy.message'),
    madeBy = intl.formatMessage('wings.Footer.madeBy.message', {
      love: (
        <span role="img" aria-label="love">
          ❤️
        </span>
      ),
    }),
  } = copy;
  return (
    <Wrap backgroundColor={backgroundColor} color={color}>
      <Container>
        {title || _.logoImageUrl ? (
          <CTASection>
            <h2 className="title">{title}</h2>
            <div>
              {logo.url ||
                (_.footerLogoImageUrl && (
                  <a href="/">
                    <Logo src={logo.url || _.footerLogoImageUrl} alt="logo" />
                  </a>
                ))}
            </div>
          </CTASection>
        ) : null}
        {columns && <FooterColumns columns={columns} />}
        {children}
        <BolsterLinkContainer>
          <BolsterLink href="https://wings.dev">{poweredBy}</BolsterLink>
          <BolsterLink href="https://bolster.digital">{madeBy}</BolsterLink>
        </BolsterLinkContainer>
      </Container>
    </Wrap>
  );
};

export default Footer;
