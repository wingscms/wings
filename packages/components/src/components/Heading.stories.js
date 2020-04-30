import React from 'react';
import { boolean, number, select } from '@storybook/addon-knobs/react';
import { Heading } from '@wingscms/components';

const props = ({ rank = 1 } = {}) => {
  const bfs = number('baseFontSize', '');
  const bfst = number('baseTabletFontSize', '');
  const bfsm = number('baseMobileFontSize', '');
  return {
    rank,
    scaleRatio: number('scaleRatio', 1.25),
    baseFontSize: bfs ? `${bfs}px` : null,
    baseTabletFontSize: bfst ? `${bfst}px` : null,
    baseMobileFontSize: bfsm ? `${bfsm}px` : null,
    textAlign: select('textAlign', Heading.TextAlign, Heading.TextAlign.LEFT),
    uppercase: boolean('uppercase', false),
  };
};

export default () => (
  <>
    <Heading {...props({ rank: 1 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 2 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 3 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 4 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 5 })}>This is a Heading</Heading>
  </>
);
