import React from 'react';
import { SectionMarker, wide } from '@wingscms/components';
import styled from '../../lib/styled';
import createCard from '../../createCard';

const _SectionMarker = styled(SectionMarker)`
  ${wide}
`;

function SectionMarkerView({ marker, number, intro, text, ...props }) {
  return <_SectionMarker number={marker || number} text={intro || text} {...props} />;
}

export default createCard({
  name: 'SectionMarkerCard',
  renderWith: SectionMarkerView,
});
