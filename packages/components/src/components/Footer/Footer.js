import React from 'react';
import styled from 'styled-components';
import fP from 'filter-invalid-dom-props';
import { t, useTheme } from '../../theme';

import Section from './Section';
import FooterColumns from './FooterColumns';

const Wrap = styled.div`
  background-color: ${t(_ => _.footerBackgroundColor)};
  color: ${t(_ => _.footerTextColor)};
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

const Logo = styled.img`
  max-height: 80px;
`;

const Footer = ({ children, columns, logo = {}, title, ...props }) => {
  const _ = useTheme();

  return (
    <Wrap {...fP(props)}>
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
      </Container>
    </Wrap>
  );
};

export default Footer;
