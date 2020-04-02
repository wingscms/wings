import React from 'react';
import styled from '../lib/styled';
import { t } from '../theme';

const Bar = styled.div`
  position: absolute;
  display: block;
  background-color: ${t((_, { barColor }) => barColor || _.iconColor)};
  height: ${({ barHeight }) => barHeight};
  border-radius: 2px;
  width: 100%;
  transition: 0.2s all ease-in-out;
`;

const Top = styled(Bar)`
  top: 0;
`;

const Middle = styled(Bar)`
  top: 50%;
  transform: translateY(-50%);
`;

const Bottom = styled(Bar)`
  top: 100%;
  transform: translateY(-100%);
`;

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: block;
  position: relative;
  cursor: pointer;
  &:hover > ${Top}, &:hover > ${Middle}, &:hover > ${Bottom} {
    background-color: ${t((_, { barHoverColor }) => barHoverColor || _.primaryColor)};
  }
`;

export default ({
  barColor,
  barHoverColor,
  width = '40px',
  height = '30px',
  barHeight = '5px',
  borderRadius = '0',
  ...props
}) => (
  <Container height={height} width={width} barHoverColor={barHoverColor} {...props}>
    <Top barHeight={barHeight} barColor={barColor} borderRadius={borderRadius} />
    <Middle barHeight={barHeight} barColor={barColor} borderRadius={borderRadius} />
    <Bottom barHeight={barHeight} barColor={barColor} borderRadius={borderRadius} />
  </Container>
);
