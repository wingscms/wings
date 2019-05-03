import React from 'react';
import { boolean, text, number } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { RangeInput } from '../../src/components/forms';

export const RangeInputInfo = `
  documentation...
`;

export const RangeInputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Range</p>
    <FieldContainer>
      <RangeInput
        style={{ paddingLeft: 0, paddingRight: 0 }}
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        min={number('min', 0)}
        max={number('max', 100)}
        step={number('step', 1)}
        label={text('label', 'Range Input Field')}
      />
    </FieldContainer>
  </div>
);
