import React from 'react';
import faker from 'faker';
import { color } from '@storybook/addon-knobs/react';
import { Overlay } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <div>
    {faker.lorem.paragraphs(8)}
    <Overlay backgroundColor={color('backgroundColor', 'rgba(0, 0, 0, 0.3)')} />
  </div>
);

export const wrapStory = paddingWrap;
