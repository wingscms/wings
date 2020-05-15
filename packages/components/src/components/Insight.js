import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Fade from './Fade';
import Heading from './Heading';

const Container = styled.div`
  background-color: ${t(_ => _.insightBackgroundColor)};
  padding: ${t(_ => _.largeSpacing)};
  text-align: center;
  color: ${t(_ => _.insightTextColor)};
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
  font-weight: bold;
  max-width: 1160px;
  margin: 0 auto;
`;

export default function Insight({ fade = true, children, ...props }) {
  return (
    <Container {...fP(props)}>
      <Fade fade={fade}>
        <Inner>{children}</Inner>
      </Fade>
    </Container>
  );
}
