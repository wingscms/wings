import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';
import Reveal from './Reveal';
import Heading from './Heading';
import _Surface from './Surface';

const Surface = styled(_Surface)`
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

const InnerSurface = styled(_Surface)`
  background-color: transparent;
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

export default function Insight({ elevation = 1, reveal, children, ...props }) {
  return (
    <Surface elevation={elevation} {...fP(props)}>
      <Reveal reveal={reveal}>
        <InnerSurface>{children}</InnerSurface>
      </Reveal>
    </Surface>
  );
}
