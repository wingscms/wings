import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';
import Icon from './Icon';
import Link from './Link';
import Text from './Text';

const Container = styled.div`
  padding-top: ${t(_ => _.smallSpacing)};
`;

const Figure = styled.figure`
  background-color: ${t(_ => _.blockquoteBackgroundColor)};
  box-shadow: ${t(_ => _.shadow)};
  padding: ${t(_ => _.mediumSpacing)};
  position: relative;
  clear: both;
  margin: 0;
`;

const Quote = styled.blockquote`
  color: ${t(_ => _.blockquoteTextColor)};
  margin: 0;
`;

const IconWrap = styled.div`
  position: absolute;
  width: ${t(_ => _.mediumSpacing)};
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${t(_ => _.smallSpacing)});
  svg {
    width: 100%;
    fill: ${t(_ => _.primaryColor)};
  }
`;

const Caption = styled.figcaption`
  font-family: ${t(_ => _.textFontFamily)};
  margin-top: ${t(_ => _.smallSpacing)};
  color: ${t(_ => _.textColor)};
  text-align: center;
`;

export default function Blockquote({ text, source, sourceUrl, ...props }) {
  return (
    <Container>
      <Figure {...fP(props)}>
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
