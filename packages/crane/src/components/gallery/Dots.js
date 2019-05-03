import React from 'react';
import styled from 'styled-components';

const DotsContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  display: inline-block;
  background-color: ${({ current }) =>
    (current ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)')};
  border-radius: 100%;
  margin: 0 5px;
  transition: 0.1s all linear;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

export default ({ currentItem, items, callback }) => (
  <DotsContainer>
    {items.map((item, idx) => (
      <Dot current={idx === currentItem} onClick={() => callback(idx, items, item)} />
    ))}
  </DotsContainer>
);
