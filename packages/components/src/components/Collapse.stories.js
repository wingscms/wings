import React from 'react';
import faker from 'faker';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Collapse } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  faker.seed(1);
  return (
    <>
      <Collapse
        intent={select('intent', Collapse.Intent, Collapse.Intent.NONE)}
        open={boolean('open', false)}
        title="Collapse Title"
      >
        {faker.lorem.paragraph(6)}
      </Collapse>
      {faker.lorem.paragraph(1)}
    </>
  );
};

export const wrapStory = paddingWrap;
