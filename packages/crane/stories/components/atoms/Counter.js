import React from 'react';
import styled from 'styled-components';
import { number, text } from '@storybook/addon-knobs/react';
import { Counter } from '../../../src/components/atoms';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 300px;
`;

export const CounterInfo = `
  documentation...
`;

export const CounterStory = () => (
  <Wrapper>
    <Counter
      current={number('current', 489)}
      max={number('max', 1000)}
      height={number('height', 12)}
      barColor={text('bar color', '#000000')}
      borderColor={text('border color', '#000000')}
    />
  </Wrapper>
);
