import React from 'react';
import { Button } from '@wingscms/components';
import styled from 'styled-components';
import { t } from '../../theme';
import SocialButtons from '../SocialButtons';

const Column = styled.div`
  padding: ${t(_ => `${_.smallSpacing} ${_.smallSpacing} 0`)};
  color: inherit;
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  width: 20%;
  max-width: 20%;
  min-width: 20%;
  flex-basis: auto;
  margin-bottom: ${t(_ => _.smallSpacing)};
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
  @media screen and (min-width: 800px) {
    padding: ${t(_ => _.smallSpacing)};
  }
  .title {
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  background-image: none;
  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const Title = styled(Text)`
  font-family: ${t(_ => _.headerFontFamily)};
  text-transform: ${t(_ => _.uppercaseTitles)};
  font-size: 20px;
  font-weight: bold;
  margin-top: ${t(_ => _.smallSpacing)};
  margin-bottom: ${t(_ => _.smallSpacing)};
  &:first-child {
    margin-top: 0;
  }
`;

const ColumnTitle = styled(Title)`
  font-size: 26px;
`;

const wrapRow = fn => (row, idx) => (
  <React.Fragment key={idx}>
    {row.title ? <Title>{row.title}</Title> : null}
    {fn(row)}
  </React.Fragment>
);

export default ({ columns }) => {
  if (!columns) return null;
  return columns.map((column, idx) => (
    <Column key={`footer-column-${idx}`}>
      {column.title && <ColumnTitle>{column.title}</ColumnTitle>}
      {column.rows.map(
        wrapRow(row => {
          switch (row.type) {
            case 'text':
              return (
                <Text>
                  {row.content
                    .trim()
                    .split('\n')
                    .reduce((arr, text, i) => {
                      if (i === 0) return [text.trim()];
                      return [...arr, <br />, text.trim()];
                    }, [])}
                </Text>
              );
            case 'link':
              return (
                <Text>
                  <Link href={row.url}>{row.content || row.url}</Link>
                </Text>
              );
            case 'button':
              return (
                <Button href={row.url} size="small" as="a" intent={Button.Intent.SECONDARY}>
                  {row.content}
                </Button>
              );
            case 'social':
              return (
                <SocialButtons>
                  {row.profiles.map(
                    (
                      {
                        platform,
                        url,
                        iconColor,
                        iconHoverColor,
                        backgroundColor,
                        backgroundHoverColor,
                      },
                      idx,
                    ) => (
                      <SocialButtons.Button
                        icon={platform}
                        url={url}
                        key={idx}
                        iconColor={iconColor}
                        iconHoverColor={iconHoverColor}
                        backgroundColor={backgroundColor}
                        backgroundHoverColor={backgroundHoverColor}
                      />
                    ),
                  )}
                </SocialButtons>
              );
            default:
              return <div />;
          }
        }),
      )}
    </Column>
  ));
};
