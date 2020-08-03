import React, { useState, isValidElement, cloneElement } from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import Theme from '../theme';
import _Collapse from './Collapse';

const Collapse = styled(_Collapse)`
  margin-bottom: 1px;
`;

const Container = styled.div``;

function Item({ ...props }) {
  return <Collapse {...props} />;
}

export default function Accordion({
  children,
  intent,
  backgroundColor,
  backgroundHoverColor,
  openIndex,
  ...props
}) {
  const [openIdx, setOpenIdx] = useState(null);
  const _openIdx = typeof openIndex !== 'undefined' ? openIndex : openIdx;
  return (
    <Container {...fP(props)}>
      {React.Children.map(children, (child, idx) => {
        if (isValidElement(child) && child.type === Item) {
          return cloneElement(child, {
            open: idx === _openIdx,
            intent: child.props.intent || intent,
            backgroundColor: child.props.backgroundColor || backgroundColor,
            backgroundHoverColor: child.props.backgroundHoverColor || backgroundHoverColor,
            ...(typeof openIndex !== 'undefined' || {
              onClick: () => setOpenIdx(idx === _openIdx ? null : idx),
            }),
          });
        }
        return child;
      })}
    </Container>
  );
}

Accordion.Item = Item;
Accordion.Item.Intent = Theme.Intent;
