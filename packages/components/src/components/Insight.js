import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Reveal from './Reveal';
import Heading from './Heading';

const Container = styled.div`
  background-color: ${t(_ => _.insightBackgroundColor)};
  padding: ${t(_ => _.largeSpacing)};
  text-align: center;
  ${t(_ =>
    _.tabletQuery(
      css`
        padding: ${t(_ => _.mediumSpacing)};
      `,
    ),
  )}
`;

const Inner = styled.div`
  ${t(Heading.getStyles(5))}
  color: ${t(_ => _.insightTextColor)};
  font-weight: bold;
  max-width: 1160px;
  margin: 0 auto;
  ${t(_ =>
    _.tabletQuery(
      css`
        ${t(Heading.getStyles(4))}
        color: ${t(_ => _.insightTextColor)};
      `,
    ),
  )}
  ${t(_ =>
    _.mobileQuery(
      css`
        ${t(Heading.getStyles(3))}
        color: ${t(_ => _.insightTextColor)};
      `,
    ),
  )}
`;

export default function Insight({ reveal, children, ...props }) {
  return (
    <Container {...fP(props)}>
      <Reveal reveal={reveal}>
        <Inner>{children}</Inner>
      </Reveal>
    </Container>
  );
}
