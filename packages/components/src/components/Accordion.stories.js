import React from 'react';
import faker from 'faker';
import { number } from '@storybook/addon-knobs/react';
import { Accordion, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export const Uncontrolled = () => (
  <Accordion>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
  </Accordion>
);

export const Controlled = () => (
  <Accordion openIndex={number('openIndex', -1)}>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
    <Accordion.Item intent={Accordion.Item.Intent.PRIMARY} label={faker.lorem.sentence()}>
      <Text noSpacing>{faker.lorem.paragraph(6)}</Text>
    </Accordion.Item>
  </Accordion>
);

export const wrapStory = paddingWrap;
