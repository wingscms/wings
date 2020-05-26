import React from 'react';
import { boolean, text, number } from '@storybook/addon-knobs/react';
import { Heading } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';
import defaultTheme from '../theme/defaultTheme';

const props = ({ rank = 1 } = {}) => ({
  rank,
  scaleRatio: number('scaleRatio', 1.25),
  baseFontSize: text('baseFontSize', defaultTheme.baseFontSize),
  baseTabletFontSize: text('baseTabletFontSize', defaultTheme.baseTabletFontSize),
  baseMobileFontSize: text('baseMobileFontSize', defaultTheme.baseMobileFontSize),
  uppercase: boolean('uppercase', false),
});

export default () => (
  <>
    <Heading {...props({ rank: number('rank', 1, { range: true, min: 1, max: 6 }) })}>
      This is a Heading
    </Heading>
    <Heading {...props({ rank: 2 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 3 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 4 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 5 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 6 })}>This is a Heading</Heading>
  </>
);

export const wrapStory = paddingWrap;
