import React from 'react';
import { boolean, text, color, number } from '@storybook/addon-knobs/react';
import { SectionMarker } from '@wingscms/components';

export default () => (
  <SectionMarker
    title={text('title', 'Section One')}
    text={text('text', 'This is an introduction to the first section of the article')}
    number={text('number', '1')}
    titleColor={color('titleColor')}
    textColor={color('textColor')}
    numberColor={color('numberColor')}
    numberOpacity={number('numberOpacity')}
    fade={boolean('fade', true)}
  />
);
