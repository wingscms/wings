import React from 'react';
import { color, number, select } from '@storybook/addon-knobs/react';
import { ProgressBar } from '@wingscms/components';
import styled from 'styled-components';

const Container = styled.div`
  height: 200vh;
`;

export default () => (
  <Container>
    <ProgressBar
      percentage={number('percentage', 14, { range: true, min: 0, max: 100 })}
      barColor={color('barColor')}
      position={select('position', ProgressBar.Position, ProgressBar.Position.FIXED)}
    />
  </Container>
);

export const useWindowScrollPosition = () => (
  <Container>
    <ProgressBar
      barColor={color('barColor')}
      position={select('position', ProgressBar.Position, ProgressBar.Position.FIXED)}
      useWindowScrollPosition={true}
    />
  </Container>
);
