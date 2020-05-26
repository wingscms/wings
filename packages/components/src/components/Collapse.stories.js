import React from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Collapse } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import { text } from '@storybook/addon-knobs';

export const Controlled = () => {
  faker.seed(1);
  return (
    <>
      <Collapse
        intent={select('intent', Collapse.Intent, Collapse.Intent.NONE)}
        open={boolean('open', false)}
        label={text('label', faker.lorem.sentence())}
      >
        {faker.lorem.paragraph(6)}
      </Collapse>
      {faker.lorem.paragraph(1)}
    </>
  );
};

export const Uncontrolled = () => {
  faker.seed(1);
  return (
    <>
      <Collapse
        intent={select('intent', Collapse.Intent, Collapse.Intent.NONE)}
        label={text('label', faker.lorem.sentence())}
      >
        {faker.lorem.paragraph(6)}
      </Collapse>
      {faker.lorem.paragraph(1)}
    </>
  );
};

export const wrapStory = paddingWrap;
