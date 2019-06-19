import React from 'react';
import styled from 'styled-components';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import theme from '../../styles/theme';
import Button from '../../../src/components/Button';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 300px;
`;

export const ButtonInfo = `
  documentation...
`;

export const ButtonStory = () => (
  <Wrapper>
    <Button
      theme={theme}
      type={select('Type', { normal: 'normal', outline: 'outline' }, 'normal')}
      intent={select(
        'Intent',
        {
          none: 'none',
          primary: 'primary',
          secondary: 'secondary',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
        },
        'none',
      )}
      size={select(
        'Size',
        {
          normal: 'normal',
          small: 'small',
        },
        'normal',
      )}
      disabled={boolean('Disabled', false)}
    >
      {text('Button Text', 'Oh my, a button!')}
    </Button>
  </Wrapper>
);
