import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';

import Icon from './Icon';
import _Link from './Link';
import _Text from './Text';
import Surface from './Surface';

const Container = styled.div`
  padding-top: ${t(_ => _.smallSpacing)};
`;

const Figure = styled(Surface)`
  background-color: ${t(_ => _.blockquoteBackgroundColor)};
  padding: ${t(_ => _.mediumSpacing)};
  position: relative;
  clear: both;
  margin: 0;
`;

const Quote = styled.blockquote`
  margin: 0;
`;

const Text = styled(_Text)`
  color: ${t(_ => _.blockquoteTextColor)};
`;

const IconWrap = styled.div`
  position: absolute;
  width: ${t(_ => _.mediumSpacing)};
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${t(_ => _.smallSpacing)});
  svg {
    width: 100%;
    fill: ${t(_ => _.blockquoteIconColor)};
  }
`;

const Caption = styled.figcaption`
  font-family: ${t(_ => _.textFontFamily)};
  margin-top: ${t(_ => _.smallSpacing)};
  text-align: center;
`;

const Link = styled(_Link)`
  color: ${t(_ => _.blockquoteTextColor)};
`;

export default function Blockquote({ elevation = 1, text, source, sourceUrl, ...props }) {
  return (
    <Container>
      <Figure elevation={elevation} {...fP(props)}>
        <IconWrap>
          <Icon icon="quote" />
        </IconWrap>
        <Quote>
          <Text noSpacing>{text}</Text>
        </Quote>
        {!source ? null : (
          <Caption>{!sourceUrl ? source : <Link href={sourceUrl}>{source}</Link>}</Caption>
        )}
      </Figure>
    </Container>
  );
}
