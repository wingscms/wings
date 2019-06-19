import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { CheckboxInput } from '../../../src/components/forms';

export const CheckboxInfo = `
  documentation...
`;

export const CheckboxStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Checkbox</p>
    <FieldContainer>
      <CheckboxInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Checkbox')}
        type={text('type', '')}
      />
    </FieldContainer>
  </div>
);
