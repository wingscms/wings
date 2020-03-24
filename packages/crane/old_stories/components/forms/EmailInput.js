import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { EmailInput } from '../../../src/components/forms';

export const EmailInputInfo = `
  documentation...
`;

export const EmailInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Email</p>
    <FieldContainer>
      <EmailInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Email Input Field')}
      />
    </FieldContainer>
  </div>
);
