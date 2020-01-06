import React from 'react';
import styled from '../lib/styled';
import { number, select } from '@storybook/addon-knobs/react';
import Counter from '../../../src/components/Counter';
import theme from '../../styles/theme';

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
      theme={theme}
      intent={select(
        'Intent',
        {
          none: 'none',
          primary: 'primary',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
        },
        'none',
      )}
      current={number('current', 489)}
      max={number('max', 1000)}
      height={number('height', 12)}
    />
  </Wrapper>
);
