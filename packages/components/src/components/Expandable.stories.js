import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import faker from 'faker';
import { Expandable, Text } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => {
  faker.seed(1);
  return (
    <Expandable
      openText={text('openText', 'More')}
      closeText={text('closeText', 'Less')}
      backgroundColor={color('backgroundColor', '')}
      toggleColor={color('toggleColor', '')}
      toggleHoverColor={color('toggleHoverColor', '')}
      expandable={boolean('expandable', true)}
      shadow={boolean('shadow', true)}
      height={text('height', '250px')}
      toggleFontFamily={text('toggleFontFamily', '')}
    >
      <Text>{faker.lorem.paragraphs(10)}</Text>
    </Expandable>
  );
};

export const wrapStory = paddingWrap;
