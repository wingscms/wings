import React from 'react';
import styled from 'styled-components';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Burger } from '../../src/components/menu';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

export const BurgerInfo = `
  documentation...
`;

export const BurgerStory = () => (
  <Wrapper>
    <Burger
      active={boolean('active', false)}
      color={text('color', '#000000')}
      type={select(
        'type',
        {
          boring: 'boring',
          squeeze: 'squeeze',
          spin: 'spin',
        },
        'boring',
      )}
    />
  </Wrapper>
);
