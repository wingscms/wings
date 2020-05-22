import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Heading from './Heading';
import { ALIGNLEFT, ALIGNRIGHT } from '../styles';
import Link from './Link';

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const getContainerStyles = ({ align }) => {
  switch (align) {
    case Align.LEFT:
      return ALIGNLEFT;
    case Align.RIGHT:
      return ALIGNRIGHT;
    default:
      return css`
        text-align: center;
      `;
  }
};

const Container = styled.div`
  padding-top: ${t(_ => _.smallSpacing)};
  ${getContainerStyles}
`;

const Figure = styled.figure`
  background-color: ${t(_ => _.pullquoteBackgroundColor)};
  padding: ${t(_ => _.mediumSpacing)};
  position: relative;
  clear: both;
  margin: 0;
`;

const Quote = styled.blockquote`
  ${t(Heading.getStyles(2))}
  font-weight: bold;
  color: ${t(_ => _.pullquoteTextColor)};
  margin: 0;
`;

const Caption = styled.figcaption`
  margin-top: ${t(_ => _.smallSpacing)};
  color: ${t(_ => _.textColor)};
  text-align: center;
`;

export default function Pullquote({ align = Align.CENTER, text, source, sourceUrl, ...props }) {
  return (
    <Container align={align}>
      <Figure {...fP(props)}>
        <Quote>{text}</Quote>
        {!source ? null : (
          <Caption>{!sourceUrl ? source : <Link href={sourceUrl}>{source}</Link>}</Caption>
        )}
      </Figure>
    </Container>
  );
}

Pullquote.Align = Align;
