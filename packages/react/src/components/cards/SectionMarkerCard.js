import React from 'react';
import { SectionMarker, wide } from '@wingscms/components';
import styled, { css } from '../../lib/styled';
import createCard from '../../createCard';
import { t } from '../../theme';

const _SectionMarker = styled(SectionMarker)`
  ${wide}
  margin-top: ${t(_ => _.largeSpacing)};
  margin-bottom: ${t(_ => _.largeSpacing)};
  &:first-child {
    margin-top: 0 !important;
  }
  ${t(_ =>
    _.tabletQuery(
      css`
        margin-top: ${t(_ => _.mediumSpacing)};
        margin-bottom: ${t(_ => _.mediumSpacing)};
      `,
    ),
  )}
`;

function SectionMarkerView({ marker, number, intro, text, ...props }) {
  return <_SectionMarker number={marker || number} text={intro || text} {...props} />;
}

export default createCard({
  name: 'SectionMarkerCard',
  renderWith: SectionMarkerView,
});
