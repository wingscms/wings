/* eslint-disable no-mixed-operators */

import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';

const StyledCounter = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 7.5px;
  background-color: transparent;
  border: 1px solid ${t((_, { barColor, intent }) => barColor || _.intentColor(intent))};
  overflow: hidden;
`;

const StyledCounterInner = styled(StyledCounter)`
  width: ${props => `${props.width || 0}%`};
  height: ${({ height }) => `${height - 2}px` || '12px'};
  margin-top: 0;
  border: 0;
  border-radius: 0;
  background-color: ${t((_, { barColor, intent }) => barColor || _.intentColor(intent))};
  position: relative;
  overflow: visible;
`;

export default function ProgressBar({ barColor, current, max, height = 12, intent, ...props }) {
  const width = current >= max ? 100 : (100 / max) * current;
  return (
    <StyledCounter barColor={barColor} intent={intent} height={height} {...fP(props)}>
      <StyledCounterInner
        barColor={barColor}
        intent={intent}
        height={height}
        width={width}
        {...props}
      />
    </StyledCounter>
  );
}
