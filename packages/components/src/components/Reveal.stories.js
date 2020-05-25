import React from 'react';
import faker from 'faker';
import { boolean } from '@storybook/addon-knobs/react';
import { Reveal } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  return <Reveal reveal={boolean('reveal', true)}>{faker.lorem.paragraphs(10)}</Reveal>;
};

export const wrapStory = paddingWrap;
