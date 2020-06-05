import React from 'react';
import styled from 'styled-components';
import { Button } from '@wingscms/components';
import SchemaForm from '@wingscms/jsonschema-form';
import { object } from '@storybook/addon-knobs/react';
import { contentWrap } from '../../../../utils';

const Container = styled.div`
  background-color: rgb(65, 125, 232);
  color: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export default () => (
  <Container>
    <SchemaForm
      schema={object('schema', {
        title: 'A registration form',
        description: 'A simple form example.',
        type: 'object',
        required: ['firstName', 'lastName'],
        properties: {
          firstName: {
            type: 'string',
            title: 'First name',
            default: 'Chuck',
          },
          lastName: {
            type: 'string',
            title: 'Last name',
          },
          age: {
            type: 'integer',
            title: 'Age',
          },
          bio: {
            type: 'string',
            title: 'Bio',
          },
          telephone: {
            type: 'string',
            title: 'Telephone',
            minLength: 10,
          },
        },
      })}
      onSubmit={props => console.log(props)}
    >
      <Button intent={Button.Intent.SECONDARY}>Submit</Button>
    </SchemaForm>
  </Container>
);

export const AddressField = () => (
  <Container>
    <SchemaForm
      schema={object('schema', {
        type: 'object',
        required: ['firstName', 'lastName', 'email', 'terms', 'privacyConsent'],
        properties: {
          firstName: { title: 'First name', type: 'string', minLength: 1 },
          lastName: { title: 'Last name', type: 'string', minLength: 1 },
          email: { title: 'Email address', type: 'string', format: 'email' },
          urcaC7ufhSjvhYoc5: {
            title: 'Address',
            type: 'object',
            required: ['postcode', 'number', 'street', 'state', 'city', 'country'],
            fieldType: 'address',
            country: 'NL',
            properties: {
              postcode: { type: 'string', title: 'Postcode' },
              number: { type: 'integer', title: 'Huisnummer' },
              numberAddition: { type: 'string', title: 'Huisnr. Toevoeging' },
              street: { type: 'string', title: 'Straat' },
              state: { type: 'string', title: 'Provincie' },
              city: { type: 'string', title: 'Plaatsnaam' },
              country: { type: 'string', title: 'Land' },
            },
          },
          newsletter: { title: 'Stay up to date', type: 'boolean' },
          terms: { title: 'Agree to our terms & conditions', type: 'boolean', enum: [true] },
          privacyConsent: { title: 'Agree to our privacy policy', type: 'boolean', enum: [true] },
        },
      })}
      onSubmit={props => console.log(props)}
    >
      <Button intent={Button.Intent.SECONDARY}>Submit</Button>
    </SchemaForm>
  </Container>
);

export const wrapStory = contentWrap;
