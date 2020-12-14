import React from 'react';
import styled from '../../lib/styled';
import { t } from '../../theme';
import Button from '../Button';
import Heading from '../Heading';
import Text from '../Text';
import SocialButtons from '../SocialButtons';

const Column = styled.div`
  font-family: ${t(_ => _.textFontFamily)};
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

const Title = styled(Heading)`
  color: ${t(_ => _.footerHeadingColor)};
  margin-top: ${t(_ => _.smallSpacing)};
  margin-bottom: ${t(_ => _.smallSpacing)};
  &:first-child {
    margin-top: 0;
  }
`;

const wrapRow = fn => (row, idx) => (
  <React.Fragment key={idx}>
    {row.title ? <Title rank={4}>{row.title}</Title> : null}
    {fn(row)}
  </React.Fragment>
);

const Image = styled.img`
  max-width: 100%;
`;

const ImageRow = ({ src, alt, url }) => {
  const image = <Image src={src} alt={alt} />;
  if (url) {
    return <a href={url}>{image}</a>;
  }
  return image;
};

export default ({ columns }) => {
  if (!columns) return null;
  return columns.map((column, idx) => (
    <Column key={`footer-column-${idx}`}>
      {column.title && <Title rank={3}>{column.title}</Title>}
      {Array.isArray(column.rows) &&
        column.rows.map(
          wrapRow(row => {
            switch (row.type) {
              case 'text':
                return (
                  <Text noSpacing>
                    {row.content
                      .trim()
                      .split('\n')
                      .reduce((arr, text, i) => {
                        if (i === 0) return [text.trim()];
                        return [...arr, <br />, text.trim()];
                      }, [])}
                  </Text>
                );
              case 'image':
                return <ImageRow src={row.src} alt={row.alt} url={row.url} />;
              case 'link':
                return (
                  <Text>
                    <Link href={row.url}>{row.content || row.url}</Link>
                  </Text>
                );
              case 'button':
                return (
                  <Button
                    href={row.url}
                    size="small"
                    as="a"
                    intent={Button.Intent.SECONDARY}
                    {...row}
                  >
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
                          intent,
                          backgroundColor,
                          backgroundHoverColor,
                          textColor,
                          textHoverColor,
                        },
                        idx,
                      ) => (
                        <SocialButtons.Button
                          icon={platform}
                          url={url}
                          key={idx}
                          intent={intent || Button.Intent.SECONDARY}
                          iconColor={iconColor}
                          iconHoverColor={iconHoverColor}
                          backgroundColor={backgroundColor}
                          backgroundHoverColor={backgroundHoverColor}
                          textColor={textColor}
                          textHoverColor={textHoverColor}
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
