import React, { useState } from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import Theme, { t } from '../theme';
import Heading from './Heading';

const Container = styled.div`
  width: 100%;
  margin-bottom: ${t(_ => _.smallSpacing)};
`;

const Label = styled.div`
  ${t((_, { intent }) => {
    const color = _.intentColor(intent);
    return css`
      background-color: ${color};
      color: ${_.contrastColor({ backgroundColor: color })};
      padding: ${_.smallSpacing};
      cursor: pointer;
      opacity: 1;
      transition: all 0.15s ease-in-out;
      user-select: none;
      &:hover,
      &:active {
        opacity: 0.8;
      }
    `;
  })}
`;

const Content = styled.div`
  ${t((_, { intent }) => {
    const color = _.intentColor(intent);
    return css`
      padding: ${t(_ => _.smallSpacing)};
      opacity: 1;
      transition: all 0.15s ease-in-out;
      height: auto;
      border: 1px solid ${color};
      ${({ open }) =>
        !open &&
        css`
          height: 0;
          padding: 0 ${t(_ => _.smallSpacing)};
          overflow: hidden;
        `}
    `;
  })}
`;

export default function Collapse({
  children,
  onClick,
  open,
  intent = Theme.Intent.NONE,
  label,
  ...props
}) {
  const [_open, setOpen] = useState(false);
  const _onClick = () => setOpen(!_open);
  const getOpen = () => {
    if (typeof open === 'boolean') return open;
    return _open;
  };
  return (
    <Container {...fP(props)}>
      <Label onClick={onClick || _onClick} intent={intent}>
        <Heading noSpacing rank={4}>
          {label}
        </Heading>
      </Label>
      <Content open={getOpen()} intent={intent}>
        {children}
      </Content>
    </Container>
  );
}

Collapse.Intent = Theme.Intent;
