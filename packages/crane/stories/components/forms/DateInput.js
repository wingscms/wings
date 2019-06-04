import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { DateInput } from '../../../src/components/forms';

export const DateInputInfo = `
  documentation...
`;

export const DateInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Date</p>
    <FieldContainer>
      <DateInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Date Input Field')}
      />
    </FieldContainer>
  </div>
);
