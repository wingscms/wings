import React from 'react';
import faker from 'faker';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import defaultTheme from '../theme/defaultTheme';

const props = () => ({
  baseFontSize: text('baseFontSize', defaultTheme.baseFontSize),
  baseTabletFontSize: text('baseTabletFontSize', defaultTheme.baseTabletFontSize),
  baseMobileFontSize: text('baseMobileFontSize', defaultTheme.baseMobileFontSize),
  noSpacing: boolean('noSpacing', false),
});

export default () => <Text {...props()}>{faker.lorem.paragraphs(10)}</Text>;

export const wrapStory = paddingWrap;
