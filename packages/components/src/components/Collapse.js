import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import Theme, { t } from '../theme';
import Heading from './Heading';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${t((_, { intent }) => {
    const color = _.intentColor(intent);
    return css`
      background-color: ${color};
      color: ${_.contrastColor({ backgroundColor: color })};
      padding: ${_.smallSpacing};
      ${t(Heading.getStyles(0))}
      font-weight: bold;
      width: 100%;
      cursor: pointer;
      opacity: 1;
      transition: all 0.15s ease-in-out;
      user-select: none;
      margin: 0;
      &:hover,
      &:active {
        opacity: 0.8;
      }
    `;
  })}
`;

const Content = styled.div`
  padding: ${t(_ => _.smallSpacing)};
  opacity: 1;
  transition: all 0.15s ease-in-out;
  height: auto;
  ${({ open }) =>
    !open &&
    css`
      height: 0;
      padding: 0 ${t(_ => _.smallSpacing)};
      overflow: hidden;
      /* opacity: 0; */
    `}
`;

export default function Collapse({
  children,
  onClick,
  open,
  intent = Theme.Intent.NONE,
  title,
  ...props
}) {
  return (
    <Container {...fP(props)}>
      <Title onClick={onClick} intent={intent}>
        {title}
      </Title>
      <Content open={open}>{children}</Content>
    </Container>
  );
}

Collapse.Intent = Theme.Intent;
