import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { NumberInput } from '../../../src/components/forms';

export const NumberInputInfo = `
  documentation...
`;

export const NumberInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Number</p>
    <FieldContainer>
      <NumberInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Number Input Field')}
      />
    </FieldContainer>
  </div>
);
