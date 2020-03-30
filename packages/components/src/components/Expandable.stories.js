import React from 'react';
import { text, color, number, boolean } from '@storybook/addon-knobs/react';
import faker from 'faker';
import { Expandable } from '..';

export default () => {
  faker.seed(1);
  return (
    <Expandable
      openText={text('openText', 'More')}
      closeText={text('closeText', 'Less')}
      borderRadius={number('borderRadius', 4)}
      backgroundColor={color('backgroundColor', '')}
      toggleColor={color('toggleColor', '')}
      toggleHoverColor={color('toggleHoverColor', '')}
      expandable={boolean('expandable', true)}
      shadow={boolean('shadow', true)}
      height={text('height', '250px')}
      toggleFontFamily={text('toggleFontFamily', '')}
    >
      {faker.lorem.paragraphs(10)}
    </Expandable>
  );
};
