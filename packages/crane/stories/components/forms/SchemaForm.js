import React from 'react';
import styled from '../lib/styled';
import ReactJson from 'react-json-view';
import { text } from '@storybook/addon-knobs/react';
import { SchemaForm } from '../../../src/components/forms';

const StyledForm = styled(SchemaForm)`
  border: none;
  background-color: rgb(239, 91, 88);
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 4px;
  fieldset {
    border: none;
    padding: 0;
  }
`;

const SubmitButton = styled.button`
  display: block;
  font-size: inherit;
  height: 100%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const SchemaFormInfo = `
  documentation...
`;

export const SchemaFormStory = () => (
  <div>
    <StyledForm
      onSubmit={() => window.alert('Submitted!')}
      schema={JSON.parse(
        text(
          'schema',
          JSON.stringify({
            type: 'object',
            required: ['email', 'password', 'terms', 'amount'],
            properties: {
              firstName: { type: 'string', title: 'First Name', default: '' },
              lastName: { type: 'string', title: 'Last Name', default: '' },
              email: { type: 'string', title: 'E-mail', default: '' },
              password: { type: 'string', title: 'Password', default: '', format: 'password' },
              selectExample: {
                title: 'Pick a number',
                default: 1,
                type: 'number',
                oneOf: [
                  {
                    type: 'number',
                    enum: [1],
                    title: '1',
                  },
                  {
                    type: 'number',
                    enum: [2],
                    title: '2',
                  },
                  {
                    type: 'number',
                    enum: [3],
                    title: '3',
                  },
                ],
              },
              radioExample: {
                title: 'Pick an option',
                default: 'Red',
                type: 'string',
                oneOf: [
                  {
                    type: 'string',
                    enum: ['#ff0000'],
                    title: 'Red',
                  },
                  {
                    type: 'string',
                    enum: ['#00ff00'],
                    title: 'Green',
                  },
                  {
                    type: 'string',
                    enum: ['#0000ff'],
                    title: 'Blue',
                  },
                ],
              },
              terms: {
                type: 'boolean',
                title: 'I agree to the terms and conditions',
                default: false,
              },
              amount: {
                type: 'number',
                title: 'Amount',
                default: '',
                amounts: [5, 10, 20],
              },
            },
          }),
        ),
      )}
      uiSchema={JSON.parse(
        text(
          'uiSchema',
          JSON.stringify({
            email: {
              'ui:widget': 'email',
            },
            amount: {
              'ui:widget': 'AmountWidget',
            },
            radioExample: {
              'ui:widget': 'radio',
            },
          }),
        ),
      )}
    >
      <SubmitButton type="submit">Submit Form</SubmitButton>
    </StyledForm>
    <h2>Schema:</h2>
    <ReactJson
      src={JSON.parse(
        text(
          'schema',
          JSON.stringify({
            type: 'object',
            required: ['email', 'password', 'terms', 'amount'],
            properties: {
              firstName: { type: 'string', title: 'First Name', default: '', format: 'text' },
              lastName: { type: 'string', title: 'Last Name', default: '', format: 'text' },
              email: { type: 'string', title: 'E-mail', default: '', format: 'email' },
              password: { type: 'string', title: 'Password', default: '', format: 'password' },
              selectExample: {
                title: 'Pick a number',
                default: 1,
                type: 'number',
                oneOf: [
                  {
                    type: 'number',
                    enum: [1],
                    title: '1',
                  },
                  {
                    type: 'number',
                    enum: [2],
                    title: '2',
                  },
                  {
                    type: 'number',
                    enum: [3],
                    title: '3',
                  },
                ],
              },
              radioExample: {
                title: 'Pick an option',
                default: 'Red',
                type: 'string',
                oneOf: [
                  {
                    type: 'string',
                    enum: ['#ff0000'],
                    title: 'Red',
                  },
                  {
                    type: 'string',
                    enum: ['#00ff00'],
                    title: 'Green',
                  },
                  {
                    type: 'string',
                    enum: ['#0000ff'],
                    title: 'Blue',
                  },
                ],
              },
              terms: {
                type: 'boolean',
                title: 'I agree to the terms and conditions',
                default: false,
              },
              amount: {
                type: 'number',
                title: 'Amount',
                default: '',
                amounts: [5, 10, 20],
              },
            },
          }),
        ),
      )}
    />
    <h2>UI Schema:</h2>
    <ReactJson
      src={JSON.parse(
        text(
          'uiSchema',
          JSON.stringify({
            email: {
              'ui:widget': 'email',
            },
            amount: {
              'ui:widget': 'AmountWidget',
            },
            radioExample: {
              'ui:widget': 'radio',
            },
          }),
        ),
      )}
    />
  </div>
);
