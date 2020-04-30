import React from 'react';
import { color, number, select, text } from '@storybook/addon-knobs/react';
import { ProgressBar } from '@wingscms/components';
import styled from '../lib/styled';

const Container = styled.div`
  height: 200vh;
`;

export default () => (
  <Container>
    <ProgressBar
      percentage={number('percentage', 14, { range: true, min: 0, max: 100 })}
      barColor={color('barColor')}
      backgroundColor={color('backgroundColor')}
      position={select('position', ProgressBar.Position, ProgressBar.Position.FIXED)}
      height={text('height', '5px')}
    />
  </Container>
);

export const useWindowScrollPosition = () => (
  <Container>
    <ProgressBar
      barColor={color('barColor')}
      backgroundColor={color('backgroundColor')}
      position={select('position', ProgressBar.Position, ProgressBar.Position.FIXED)}
      height={text('height', '5px')}
      useWindowScrollPosition={true}
    />
  </Container>
);
