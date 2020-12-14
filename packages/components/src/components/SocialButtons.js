import React from 'react';
import fP from 'filter-invalid-dom-props';
import Button from './Button';
import { useTheme } from '../theme';
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
  margin-right: ${({ spacingRight }) => spacingRight}px;
  margin-bottom: ${({ spacingBottom }) => spacingBottom}px;
  padding: ${({ padding }) => padding}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  transition: 0.2s all ease-in-out;
  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.2s all ease-in-out;
  }
`;

const SocialButtons = ({
  children,
  iconColor,
  iconHoverColor,
  itemSize = 40,
  spacing = 10,
  spacingBottom,
  itemBackgroundColor,
  itemBackgroundHoverColor,
  itemBorderRadius,
  itemPadding = 8,
  items,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container {...fP(props)}>
      {React.Children.map(children, (child, idx) => {
        const { linkProps, url, ...childProps } = child.props;
        return (
          <a href={url} key={idx} {...fP(linkProps)}>
            {React.cloneElement(child, {
              textColor: iconColor || theme.shareButtonIconColor,
              textHoverColor: iconHoverColor || theme.shareButtonIconHoverColor,
              backgroundColor: itemBackgroundColor || theme.shareButtonBackgroundColor,
              backgroundHoverColor:
                itemBackgroundHoverColor || theme.shareButtonBackgroundHoverColor,
              borderRadius: itemBorderRadius,
              padding: itemPadding,
              size: itemSize,
              spacingRight: idx < React.Children.count(children) ? spacing : 0,
              spacingBottom: spacingBottom || spacing,
              ...childProps,
            })}
          </a>
        );
      })}
    </Container>
  );
};

SocialButtons.Button = Item;

export default SocialButtons;
