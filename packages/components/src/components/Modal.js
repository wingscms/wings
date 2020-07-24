import React from 'react';
import Portal from './Portal';
import styled from '../lib/styled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default () => (
  <Portal>
    <Container></Container>
  </Portal>
);
