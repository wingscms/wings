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
  return columns.map(column => (
    <Section>
      {column.title && <span className="title">{column.title}</span>}
      {column.rows.map((row) => {
        switch (row.type) {
          case 'text':
            return <AddressLine dangerouslySetInnerHTML={{ __html: row.content }} />;
          case 'link':
            return (
              <AddressLine>
                <a className="footerLink" href={row.url}>
                  {row.text || row.url}
                </a>
              </AddressLine>
            );
          case 'button':
            return (
              <AnchorButton href={row.url} size="small">
                {row.text}
              </AnchorButton>
            );
          case 'social':
            return (
              <SocialMediaWrapper>
                {row.profiles.map(({ platform, url, iconColor, backgroundColor }) =>
                  socialMediaIcon(platform, url, iconColor, backgroundColor),
                )}
              </SocialMediaWrapper>
            );
          case 'mailchimp':
            return (
              <MailchimpForm
                action={row.action}
                buttonLabel={row.buttonLabel}
                confirmationText={row.confirmationText}
                privacyCheckbox={false}
                privacyMessage=""
              />
            );
          default:
            return null;
        }
      })}
    </Section>
  ));
};
