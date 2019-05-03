import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { URLInput } from '../../src/components/forms';

export const URLInputInfo = `
  documentation...
`;

export const URLInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>URL</p>
    <FieldContainer>
      <URLInput
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'URL Input Field')}
      />
    </FieldContainer>
  </div>
);
