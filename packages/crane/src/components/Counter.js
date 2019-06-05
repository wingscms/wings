/* eslint-disable no-mixed-operators */

import React from 'react';
import styled from 'styled-components';
import { getIntentColor } from '../lib/utils';

const StyledCounter = styled.div`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 7.5px;
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
`;

const StyledCounterInner = styled(StyledCounter)`
  width: ${props => `${props.width || 0}%`};
  height: ${({ height }) => `${height - 2}px` || '12px'};
  margin-top: 0;
  background-color: ${({ color }) => color};
`;

export default ({ current, max, height = 12, theme, intent, ...props }) => {
  const width = current >= max ? 100 : (100 / max) * current;
  const color = getIntentColor({ intent, theme });
  return (
    <StyledCounter color={color} height={height} {...props}>
      <StyledCounterInner color={color} height={height} width={width} />
    </StyledCounter>
  );
};
