import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { PasswordInput } from '../../../src/components/forms';

export const PasswordInputInfo = `
  documentation...
`;

export const PasswordInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Password</p>
    <FieldContainer>
      <PasswordInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Password Input Field')}
      />
    </FieldContainer>
  </div>
);
