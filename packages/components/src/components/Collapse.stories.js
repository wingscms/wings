import React from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Collapse, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import { text } from '@storybook/addon-knobs';

export const Controlled = () => (
  <>
    <Collapse
      intent={select('intent', Collapse.Intent, Collapse.Intent.NONE)}
      open={boolean('open', false)}
      label={text('label', faker.lorem.sentence())}
    >
      <Text>{faker.lorem.paragraph(6)}</Text>
    </Collapse>
    <Text>{faker.lorem.paragraph(1)}</Text>
  </>
);

export const Uncontrolled = () => (
  <>
    <Collapse
      intent={select('intent', Collapse.Intent, Collapse.Intent.NONE)}
      label={text('label', faker.lorem.sentence())}
    >
      <Text>{faker.lorem.paragraph(6)}</Text>
    </Collapse>
    <Text>{faker.lorem.paragraph(1)}</Text>
  </>
);

export const wrapStory = paddingWrap;
