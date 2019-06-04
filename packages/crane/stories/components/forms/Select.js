import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { Select } from '../../../src/components/forms';

export const SelectInfo = `
  documentation...
`;

export const SelectStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Select</p>
    <FieldContainer>
      <Select
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Select')}
        options={text('options', 'thing1,thing2,thing3,thing4').split(',')}
      />
    </FieldContainer>
  </div>
);
