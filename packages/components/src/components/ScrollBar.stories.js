import React from 'react';
import { color, number } from '@storybook/addon-knobs/react';
import { ScrollBar } from '@wingscms/components';
import styled from 'styled-components';

const Container = styled.div`
  height: 200vh;
`;

export const Controlled = () => (
  <Container>
    <ScrollBar
      percentage={number('percentage', 14, { range: true, min: 0, max: 100 })}
      barColor={color('barColor')}
    />
  </Container>
);

export const Uncontrolled = () => (
  <Container>
    <ScrollBar barColor={color('barColor')} />
  </Container>
);
