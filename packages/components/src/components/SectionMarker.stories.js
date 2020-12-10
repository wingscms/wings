import React from 'react';
import { boolean, text, color, number } from '@storybook/addon-knobs/react';
import { SectionMarker } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <SectionMarker
    sectionTitle={text('sectionTitle', 'Section One')}
    titleColor={color('titleColor')}
    text={text('text', 'This is an introduction to the first section of the article')}
    textColor={color('textColor')}
    marker={text('marker', '1')}
    markerColor={color('markerColor')}
    markerOpacity={number('markerOpacity', 0.5, {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
    })}
    reveal={boolean('reveal', true)}
  />
);

export const wrapStory = paddingWrap;
