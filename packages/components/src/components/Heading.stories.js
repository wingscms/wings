import React from 'react';
import { boolean, number } from '@storybook/addon-knobs/react';
import { Heading } from '@wingscms/components';
import styled from '../lib/styled';

const Info = styled.p`
  font-weight: normal;
  color: #777;
  font-size: 12px;
`;

const props = ({ type = Heading.Type.h1 } = {}) => ({
  type,
  scale: number('scale', 1.25),
  baseFontSize: number('baseFontSize', 16),
  uppercase: boolean('uppercase', false),
});

const getInfo = steps => {
  return `(${Heading.modularScale(
    number('baseFontSize', 16),
    number('scale', 1.25),
    steps,
  )}px/${Heading.modularScale(1, number('scale', 1.25), steps)}rem)`;
};

export default () => (
  <>
    <Heading {...props({ type: Heading.Type.h1 })}>This is a Heading</Heading>
    <Heading {...props({ type: Heading.Type.h2 })}>This is a Heading</Heading>
    <Heading {...props({ type: Heading.Type.h3 })}>This is a Heading</Heading>
    <Heading {...props({ type: Heading.Type.h4 })}>This is a Heading</Heading>
    <Heading {...props({ type: Heading.Type.h5 })}>This is a Heading</Heading>
    <Info>h1 {getInfo(4)}</Info>
    <Info>h2 {getInfo(3)}</Info>
    <Info>h3 {getInfo(2)}</Info>
    <Info>h4 {getInfo(1)}</Info>
    <Info>h5 {getInfo(0)}</Info>
  </>
);
