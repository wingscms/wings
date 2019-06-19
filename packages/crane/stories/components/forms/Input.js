import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import FieldContainer from './FieldContainer';
import { Input } from '../../../src/components/forms';

// const schema = {
//   title: "Test Form",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Text", default: "string"},
//     aNumber: {type: "number", title: "Number", default: 0},
//     password: { type: "string", title: "Password", default: "" },
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

// const uiSchema = {
//     password: {
//       "ui:widget": "password",
//     },
// }

// const widgets = {
//   TextWidget: Input,
//   PasswordWidget: Password,
// };

export const InputInfo = `
  documentation...
`;

export const InputStory = () => (
  <div>
    <p style={{ textAlign: 'center' }}>Base Input</p>
    <FieldContainer>
      <Input
        id="input1"
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        required={boolean('required', false)}
        label={text('label', 'Base Input Field')}
        type={text('type', '')}
      />
    </FieldContainer>
  </div>
);
