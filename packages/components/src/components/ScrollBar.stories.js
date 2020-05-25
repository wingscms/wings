import React from 'react';
import { color, number } from '@storybook/addon-knobs/react';
import { ScrollBar } from '@wingscms/components';
import styled from 'styled-components';

const Container = styled.div`
  height: 200vh;
`;

export const Controlled = () => (
  <ScrollBar
    percentage={number('percentage', 14, { range: true, min: 0, max: 100 })}
    barColor={color('barColor')}
  />
);

export const Uncontrolled = () => <ScrollBar barColor={color('barColor')} />;

export const wrapStory = elem => <Container>{elem}</Container>;
