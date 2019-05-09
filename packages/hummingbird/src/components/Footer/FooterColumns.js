import React from 'react';
import { Newsletter } from '@wingscms/crane';
import styled from 'styled-components';
import Section from './Section';
import AnchorButton from '../AnchorButton';
import socialMediaIcon from './SocialMediaIcon';

const MailchimpForm = styled(Newsletter)`
  input {
    font-size: 12px;
    padding: 5px;
    height: auto;
  }
  label {
    font-size: 12px;
  }
  button {
    background-color: #000;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s all linear;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
`;

const AddressLine = styled.p`
  margin: 0;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  > div {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
`;

export default ({ columns }) => {
  if (!columns) return null;
  return columns.map((column, k) => (
    <Section key={`footer-column-${k}`}>
      {column.title && <span className="title">{column.title}</span>}
      {column.rows.map((row, i) => {
        const key = `footer-row-${i}`;
        switch (row.type) {
          case 'text':
            return <AddressLine key={key} dangerouslySetInnerHTML={{ __html: row.content }} />;
          case 'link':
            return (
              <AddressLine key={key}>
                <a className="footerLink" href={row.url}>
                  {row.text || row.url}
                </a>
              </AddressLine>
            );
          case 'button':
            return (
              <AnchorButton key={key} href={row.url} size="small">
                {row.text}
              </AnchorButton>
            );
          case 'social':
            return (
              <SocialMediaWrapper key={key}>
                {row.profiles.map(({ platform, url, iconColor, backgroundColor }, j) =>
                  socialMediaIcon(
                    platform,
                    url,
                    iconColor,
                    backgroundColor,
                    `footer-social-icon-${j}`,
                  ),
                )}
              </SocialMediaWrapper>
            );
          case 'mailchimp':
            return (
              <MailchimpForm
                key={key}
                action={row.action}
                buttonLabel={row.buttonLabel}
                confirmationText={row.confirmationText}
                privacyCheckbox={false}
                privacyMessage=""
              />
            );
          default:
            return <div key={key} />;
        }
      })}
    </Section>
  ));
};
