import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { ColorInput } from '../../../src/components/forms';

export const ColorInputInfo = `
  documentation...
`;

export const ColorInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Color</p>
    <FieldContainer>
      <ColorInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Color Input Field')}
      />
    </FieldContainer>
  </div>
);
