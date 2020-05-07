import React from 'react';
import fP from 'filter-invalid-dom-props';
import Button from './Button';
import { t } from '../theme';
import styled from '../lib/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Item = styled(Button)`
  display: block;
  margin: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-right: ${({ spacing }) => spacing}px;
  padding: ${({ padding }) => padding}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${t(
    (_, { backgroundColor }) => backgroundColor || _.shareButtonBackgroundColor,
  )};
  transition: 0.2s all ease-in-out;
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    fill: ${t((_, { iconColor }) => iconColor || _.shareButtonIconColor)};
    transition: 0.2s all ease-in-out;
  }
  &:hover,
  &:active {
    opacity: 1;
    background-color: ${t(
      (_, { backgroundHoverColor }) => backgroundHoverColor || _.shareButtonBackgroundHoverColor,
    )};
    svg {
      fill: ${t((_, { iconHoverColor }) => iconHoverColor || _.shareButtonIconHoverColor)};
    }
  }
`;

const SocialButtons = ({
  children,
  iconColor,
  iconHoverColor,
  itemSize = 40,
  spacing = 10,
  itemBackgroundColor,
  itemBackgroundHoverColor,
  itemBorderRadius = 4,
  itemPadding = 8,
  items,
  ...props
}) => (
  <Container {...fP(props)}>
    {React.Children.map(children, (child, idx) => {
      const { linkProps, url, ...childProps } = child.props;
      return (
        <a href={childProps.url} key={idx} {...fP(linkProps)}>
          {React.cloneElement(child, {
            iconColor,
            iconHoverColor,
            backgroundColor: itemBackgroundColor,
            backgroundHoverColor: itemBackgroundHoverColor,
            borderRadius: itemBorderRadius,
            padding: itemPadding,
            size: itemSize,
            spacing: idx < React.Children.count(children) ? spacing : 0,
            ...childProps,
          })}
        </a>
      );
    })}
  </Container>
);

SocialButtons.Button = Item;

export default SocialButtons;
