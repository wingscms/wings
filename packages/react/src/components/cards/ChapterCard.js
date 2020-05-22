import React from 'react';
import { SectionMarker, _WIDE } from '@wingscms/components';
import { slugify } from '../../lib/utils';
import styled, { css } from '../../lib/styled';
import createCard from '../../createCard';
import { t } from '../../theme';

const _SectionMarker = styled(SectionMarker)`
  ${_WIDE}
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

function ChapterCardView({ marker, number, intro, text, title, ...props }) {
  return (
    <_SectionMarker
      number={marker || number}
      text={intro || text}
      title={title}
      id={slugify(title)}
      reveal
      {...props}
    />
  );
}

export default createCard({
  name: 'ChapterCard',
  renderWith: ChapterCardView,
});
