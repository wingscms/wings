import React from 'react';
import { text, color, number } from '@storybook/addon-knobs/react';
import faker from 'faker';
import { Expandable, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <Expandable
    openText={text('openText', 'More')}
    closeText={text('closeText', 'Less')}
    backgroundColor={color('backgroundColor', '')}
    toggleColor={color('toggleColor', '')}
    toggleHoverColor={color('toggleHoverColor', '')}
    height={number('height', 250)}
    toggleFontFamily={text('toggleFontFamily', '')}
  >
    <Text>{faker.lorem.paragraphs(10)}</Text>
  </Expandable>
);

export const wrapStory = paddingWrap;
