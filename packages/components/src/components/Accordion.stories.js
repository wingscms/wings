import React from 'react';
import faker from 'faker';
import { number, select, color } from '@storybook/addon-knobs/react';
import { Accordion, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = () => ({
  intent: select('intent', Accordion.Item.Intent, Accordion.Item.Intent.PRIMARY),
  backgroundColor: color('backgroundColor'),
  backgroundHoverColor: color('backgroundHoverColor'),
});

export default () => (
  <Accordion {...props()}>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
  </Accordion>
);

export const Controlled = () => (
  <Accordion openIndex={number('openIndex', -1)} {...props()}>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
  </Accordion>
);

export const wrapStory = paddingWrap;
