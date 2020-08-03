import React from 'react';
import faker from 'faker';
import { boolean, color, select } from '@storybook/addon-knobs/react';
import { Collapse, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import { text } from '@storybook/addon-knobs';

const props = () => ({
  intent: select('intent', Collapse.Intent, Collapse.Intent.NONE),
  label: text('label', faker.lorem.sentence()),
  backgroundColor: color('backgroundColor'),
  backgroundHoverColor: color('backgroundHoverColor'),
});

export const Controlled = () => (
  <>
    <Collapse {...props()} open={boolean('open', false)}>
      <Text>{faker.lorem.paragraph(6)}</Text>
    </Collapse>
    <Text>{faker.lorem.paragraph(1)}</Text>
  </>
);

export const Uncontrolled = () => (
  <>
    <Collapse {...props()}>
      <Text>{faker.lorem.paragraph(6)}</Text>
    </Collapse>
    <Text>{faker.lorem.paragraph(1)}</Text>
  </>
);

export const wrapStory = paddingWrap;
