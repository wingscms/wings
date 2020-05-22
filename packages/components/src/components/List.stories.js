import React from 'react';
import { color, select } from '@storybook/addon-knobs/react';
import { List } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = ({ listType = List.Type.UNORDERED } = {}) => ({
  markerColor: color('markerColor'),
  textColor: color('textColor'),
  type: select('type', List.Type, listType),
});

export const OrderedList = () => (
  <List {...props({ listType: List.Type.ORDERED })}>
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
