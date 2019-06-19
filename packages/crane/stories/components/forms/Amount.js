import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { Amount } from '../../../src/components/forms';

export const AmountInfo = `
  documentation...
`;

export const AmountStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Amount</p>
    <FieldContainer>
      <Amount
        id="input1"
        amounts={text('amounts', '5,10,20').split(',')}
        label={text('label', 'Amount Field')}
      />
    </FieldContainer>
  </div>
);
