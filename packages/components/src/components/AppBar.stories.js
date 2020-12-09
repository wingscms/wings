import React from 'react';
import faker from 'faker';
import styled from 'styled-components';
import { AppBar, Text } from '@wingscms/components';
import { boolean, select } from '@storybook/addon-knobs/react';

const props = ({ position = AppBar.Position.TOP } = {}) => ({
  position: select('position', AppBar.Position, position),
  hide: boolean('hide', false),
});

const ExampleContent = styled(Text)`
  padding: 100px 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export default () => <AppBar {...props()} />;

export const withContent = () => (
  <>
    <AppBar {...props()} />
    <ExampleContent>{faker.lorem.paragraphs(50)}</ExampleContent>
  </>
);
