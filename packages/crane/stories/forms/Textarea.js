import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { Textarea } from '../../src/components/forms';

export const TextareaInfo = `
  documentation...
`;

export const TextareaStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Textarea</p>
    <FieldContainer>
      <Textarea
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Textarea Field')}
      />
    </FieldContainer>
  </div>
);
