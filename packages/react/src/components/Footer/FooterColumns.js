import React from 'react';
import { Button } from '@wingscms/components';
import styled from 'styled-components';
import Section from './Section';
import socialMediaIcon from './SocialMediaIcon';

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
    padding: 0 10px 10px 10px;
  }
`;

export default ({ columns }) => {
  if (!columns) return null;
  return columns.map((column, k) => (
    <Section key={`footer-column-${k}`}>
      {column.title && <h2 className="title">{column.title}</h2>}
      {column.rows.map((row, i) => {
        const key = `footer-row-${i}`;
        switch (row.type) {
          case 'text':
            return <AddressLine key={key} dangerouslySetInnerHTML={{ __html: row.content }} />;
          case 'link':
            return (
              <AddressLine key={key}>
                <a className="footerLink" href={row.url}>
                  {row.content || row.url}
                </a>
              </AddressLine>
            );
          case 'button':
            return (
              <Button key={key} href={row.url} size="small" as="a" intent={Button.Intent.SECONDARY}>
                {row.content}
              </Button>
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
          default:
            return <div key={key} />;
        }
      })}
    </Section>
  ));
};
