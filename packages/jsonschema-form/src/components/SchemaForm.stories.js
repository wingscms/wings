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
    >
      <Button intent={Button.Intent.SECONDARY}>Submit</Button>
    </SchemaForm>
  </Container>
);

export const wrapStory = contentWrap;
