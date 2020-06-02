import React from 'react';
import faker from 'faker';
import { number } from '@storybook/addon-knobs/react';
import { Accordion, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export const Uncontrolled = () => {
  faker.seed(1);
  return (
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
};

export const Controlled = () => {
  faker.seed(1);
  return (
    <Accordion openIndex={number('openIndex', null)}>
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
};

export const wrapStory = paddingWrap;
