import React from 'react';
import faker from 'faker';
import { boolean, number } from '@storybook/addon-knobs/react';
import { Text } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

const props = () => {
  const bfs = number('baseFontSize', 0);
  const bfst = number('baseTabletFontSize', 0);
  const bfsm = number('baseMobileFontSize', 0);
  return {
    baseFontSize: bfs ? `${bfs}px` : null,
    baseTabletFontSize: bfst ? `${bfst}px` : null,
    baseMobileFontSize: bfsm ? `${bfsm}px` : null,
    noSpacing: boolean('noSpacing', false),
  };
};

export default () => {
  faker.seed(1);
  return <Text {...props()}>{faker.lorem.paragraphs(10)}</Text>;
};

export const wrapStory = paddingWrap;
