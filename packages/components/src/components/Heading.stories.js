import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { Heading } from '@wingscms/components';
import styled from '../lib/styled';
import { modularScale } from '../lib/utils';

const Info = styled.p`
  font-weight: normal;
  color: #777;
  font-size: 12px;
`;

const props = ({ rank = 1 } = {}) => ({
  rank,
  scaleRatio: number('scaleRatio', 1.25),
  baseFontSize: text('baseFontSize', '16px'),
  textAlign: select('textAlign', Heading.TextAlign, Heading.TextAlign.LEFT),
  uppercase: boolean('uppercase', false),
});

const getInfo = steps => {
  return `(${modularScale(
    text('baseFontSize', '16px'),
    number('scaleRatio', 1.25),
    steps,
  )}px/${modularScale('1rem', number('scaleRatio', 1.25), steps)})`;
};

export default () => (
  <>
    <Heading {...props({ rank: 1 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 2 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 3 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 4 })}>This is a Heading</Heading>
    <Heading {...props({ rank: 5 })}>This is a Heading</Heading>
    <Info>h1 {getInfo(4)}</Info>
    <Info>h2 {getInfo(3)}</Info>
    <Info>h3 {getInfo(2)}</Info>
    <Info>h4 {getInfo(1)}</Info>
    <Info>h5 {getInfo(0)}</Info>
  </>
);
