import React from 'react';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const getActiveState = position => ({ active, height, width, barHeight }) => {
  if (active) {
    if (position === 'middle')
      return css`
        opacity: 0;
      `;

    const smallest = Math.min(height, width);
    const size = Math.sqrt(smallest ** 2 + smallest ** 2) - barHeight;
    const transform =
      position === 'top' ? 'translateY(-100%) rotate(45deg)' : 'translateY(-100%) rotate(-45deg)';

    return width > height
      ? css`
          width: ${size}px;
          left: ${(width - height) / 2 + barHeight / 2}px;
          transform: ${transform};
        `
      : css`
          width: ${size}px;
          top: ${position === 'top'
            ? `${(height - width) / 2 + barHeight / 2}px`
            : `calc(100% - ${(height - width) / 2 + barHeight / 2}px)`};
          transform: ${transform};
        `;
  }
};

const Bar = styled.div`
  position: absolute;
  display: block;
  background-color: ${t((_, { color }) => color || _.burgerColor)};
  height: ${({ barHeight }) => `${barHeight}px`};
  border-radius: ${({ barBorderRadius }) => `${barBorderRadius}px`};
  width: 100%;
  left: 0;
  opacity: 1;
  transition: 0.3s all ease;
`;

const Top = styled(Bar)`
  top: ${({ barHeight }) => `${barHeight}px`};
  transform: translateY(-100%);
  transform-origin: 0 0;
  ${getActiveState('top')}
`;

const Middle = styled(Bar)`
  top: 50%;
  transform: translateY(-50%);
  ${getActiveState('middle')}
`;

const Bottom = styled(Bar)`
  top: 100%;
  transform: translateY(-100%);
  transform-origin: 0 100%;
  ${getActiveState('bottom')}
`;

const Container = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: block;
  position: relative;
  cursor: pointer;
  &:hover > ${Top}, &:hover > ${Middle}, &:hover > ${Bottom} {
    background-color: ${t((_, { hoverColor }) => hoverColor || _.burgerHoverColor)};
  }
`;

export default ({
  active,
  color,
  hoverColor,
  width = 40,
  height = 30,
  barHeight = 5,
  barBorderRadius = 0,
  ...props
}) => (
  <Container height={height} width={width} hoverColor={hoverColor} {...props}>
    <Top
      height={height}
      width={width}
      active={active}
      barHeight={barHeight}
      color={color}
      barBorderRadius={barBorderRadius}
    />
    <Middle active={active} barHeight={barHeight} color={color} barBorderRadius={barBorderRadius} />
    <Bottom
      height={height}
      width={width}
      active={active}
      barHeight={barHeight}
      color={color}
      barBorderRadius={barBorderRadius}
    />
  </Container>
);
