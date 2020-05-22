import React from 'react';
import { color, select } from '@storybook/addon-knobs/react';
import { List } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

const props = ({ type = List.Type.UNORDERED } = {}) => ({
  markerColor: color('markerColor'),
  textColor: color('textColor'),
  type: select('type', List.Type, type),
});

export const OrderedList = () => (
  <List {...props({ type: List.Type.ORDERED })}>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
  </List>
);

export const UnorderedList = () => (
  <List {...props()}>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
    <List.Item>An item in the list</List.Item>
  </List>
);

export const wrapStory = paddingWrap;
