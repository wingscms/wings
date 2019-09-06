/* eslint-disable no-mixed-operators */

import React from 'react';
import styled from 'styled-components';
import { getIntentColor } from '../lib/utils';

const StyledCounter = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 7.5px;
  background-color: transparent;
  border: 1px solid ${({ intent, theme }) => getIntentColor({ intent, theme })};
`;

const StyledCounterInner = styled(StyledCounter)`
  width: ${props => `${props.width || 0}%`};
  height: ${({ height }) => `${height - 2}px` || '12px'};
  margin-top: 0;
  background-color: ${({ intent, theme }) => getIntentColor({ intent, theme })};
`;

export default function Counter({ current, max, height = 12, intent, ...props }) {
  const width = current >= max ? 100 : (100 / max) * current;
  return (
    <StyledCounter intent={intent} height={height} {...props}>
      <StyledCounterInner intent={intent} height={height} width={width} />
    </StyledCounter>
  );
}
