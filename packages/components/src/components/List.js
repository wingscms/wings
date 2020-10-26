import React, { isValidElement, cloneElement } from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';
import Text from './Text';

const ItemLi = styled.li`
  ${t(Text.getStyles)}
  font-family: ${t(_ => _.headerFontFamily)};
  padding-left: .5em;
  margin-bottom: ${t((_, { itemSpacing }) => itemSpacing || _.listItemSpacing)};
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

const Item = ({ children, itemSpacing, ...props }) => {
  return (
    <ItemLi itemSpacing={itemSpacing} {...fP(props)}>
      <ItemSpan>{children}</ItemSpan>
    </ItemLi>
  );
};

export default function List({
  children,
  itemSpacing,
  listType = Type.UNORDERED,
  markerColor,
  textColor,
  ...props
}) {
  const _List = Components[listType];
  return (
    <_List markerColor={markerColor} textColor={textColor} {...fP(props)}>
      {React.Children.map(children, child => {
        if (isValidElement(child) && child.type === Item) {
          return cloneElement(child, {
            itemSpacing,
            ...child.props,
          });
        }
        return child;
      })}
    </_List>
  );
}

List.Item = Item;
List.Type = Type;
