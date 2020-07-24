import React from 'react';
import faker from 'faker';
import { boolean } from '@storybook/addon-knobs/react';
import { Modal } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <div>
    {faker.lorem.paragraphs(8)}
    {boolean('open') ? <Modal /> : null}
  </div>
);

export const wrapStory = paddingWrap;
