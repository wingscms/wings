import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';
import Text from './Text';

const ItemLi = styled.li`
  ${t(Text.getStyles)}
  font-family: ${t(_ => _.headerFontFamily)};
  padding-left: .5em;
`;

const ItemSpan = styled.span`
  font-weight: normal;
  font-family: ${t(_ => _.textFontFamily)};
`;

const UnorderedList = styled.ul`
  color: ${t((_, { markerColor }) => markerColor || _.unorderedListMarkerColor)};
  font-family: ${t(_ => _.headerFontFamily)};
  ${ItemSpan} {
    color: ${t((_, { textColor }) => textColor || _.unorderedListTextColor)};
  }
`;

const OrderedList = styled.ol`
  color: ${t((_, { markerColor }) => markerColor || _.orderedListMarkerColor)};
  font-weight: bold;
  ${ItemSpan} {
    color: ${t((_, { textColor }) => textColor || _.orderedListTextColor)};
  }
`;

const Type = {
  ORDERED: 'ordered',
  UNORDERED: 'unordered',
};

const Components = {
  [Type.ORDERED]: OrderedList,
  [Type.UNORDERED]: UnorderedList,
};

const Item = ({ children, ...props }) => {
  return (
    <ItemLi {...fP(props)}>
      <ItemSpan>{children}</ItemSpan>
    </ItemLi>
  );
};

export default function List({
  children,
  markerColor,
  textColor,
  listType = Type.UNORDERED,
  ...props
}) {
  const _List = Components[listType];
  return (
    <_List markerColor={markerColor} textColor={textColor} {...fP(props)}>
      {children}
    </_List>
  );
}

List.Item = Item;
List.Type = Type;
