import React, { useState } from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import Theme, { t, useTheme } from '../theme';
import _Heading from './Heading';

const Container = styled.div`
  width: 100%;
  margin-bottom: ${t(_ => _.smallSpacing)};
`;

const Label = styled.div`
  background-color: ${({ color }) => color};
  cursor: pointer;
  opacity: 1;
  transition: all 0.15s ease-in-out;
  user-select: none;
  &:hover,
  &:active {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const Heading = styled(_Heading)`
  color: ${t((_, { color }) => _.contrastColor({ backgroundColor: color }))};
  padding: ${t(_ => _.smallSpacing)};
  &:hover,
  &:active {
    color: ${t((_, { hoverColor }) => _.contrastColor({ backgroundColor: hoverColor }))};
  }
`;

const Content = styled.div`
  padding: ${t(_ => _.smallSpacing)};
  opacity: 1;
  transition: all 0.15s ease-in-out;
  height: auto;
  border: 1px solid ${({ color }) => color};
  border-top: 0px;
  ${({ open }) =>
    !open &&
    css`
      border: 1px solid transparent;
      height: 0;
      padding: 0 ${t(_ => _.smallSpacing)};
      overflow: hidden;
    `}
`;

export default function Collapse({
  children,
  onClick,
  open,
  intent = Theme.Intent.NONE,
  backgroundColor,
  backgroundHoverColor,
  label,
  ...props
}) {
  const _ = useTheme();
  const [_open, setOpen] = useState(false);
  const _onClick = () => setOpen(!_open);
  const getOpen = () => {
    if (typeof open === 'boolean') return open;
    return _open;
  };
  const color = backgroundColor || _.collapseBackgroundColor || _.intentColor(intent);
  const hoverColor =
    backgroundHoverColor || _.collapseBackgroundHoverColor || _.darken(_.intentColor(intent));
  return (
    <Container {...fP(props)}>
      <Label onClick={onClick || _onClick} intent={intent} color={color} hoverColor={hoverColor}>
        <Heading noSpacing rank={4} color={color} hoverColor={hoverColor}>
          {label}
        </Heading>
      </Label>
      <Content open={getOpen()} intent={intent} color={color}>
        {children}
      </Content>
    </Container>
  );
}

Collapse.Intent = Theme.Intent;
