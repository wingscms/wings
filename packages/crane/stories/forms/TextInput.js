import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { TextInput } from '../../src/components/forms';

export const TextInputInfo = `
  documentation...
`;

export const TextInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Text</p>
    <FieldContainer>
      <TextInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Text Input Field')}
      />
    </FieldContainer>
  </div>
);
