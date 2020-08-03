import React from 'react';
import { color, select, text } from '@storybook/addon-knobs/react';
import { List } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

const props = ({ listType = List.Type.UNORDERED } = {}) => ({
  markerColor: color('markerColor'),
  textColor: color('textColor'),
  listType: select('listType', List.Type, listType),
  itemSpacing: text('itemSpacing'),
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
