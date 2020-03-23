import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { Radio } from '../../../src/components/forms';

export const RadioInfo = `
  documentation...
`;

export const RadioStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Radio</p>
    <FieldContainer>
      <Radio
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Radio')}
        options={text('options', 'Option 1,Option 2,Option 3,Option 4').split(',')}
      />
    </FieldContainer>
  </div>
);
