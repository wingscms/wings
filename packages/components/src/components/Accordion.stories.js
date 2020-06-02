import React from 'react';
import faker from 'faker';
import { Accordion, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
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

export const wrapStory = paddingWrap;
