import React, { useState, useEffect } from 'react';
import styled from '../lib/styled';
import { t } from '../theme';

const Position = {
  FIXED: 'fixed',
  RELATIVE: 'relative',
};

const Container = styled.div`
  position: ${({ position }) => position};
  display: block;
  height: ${({ height }) => height};
  width: 100%;
  background-color: ${t(
    (_, { backgroundColor }) => backgroundColor || _.progressBarBackgroundColor,
  )};
  top: 0;
  left: 0;
  z-index: 20;
`;

const Inner = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: ${t((_, { barColor }) => barColor || _.progressBarColor)};
  transition: width 0.1s ease-out;
`;

const ProgressBar = ({
  barColor,
  backgroundColor,
  height = '5px',
  percentage = 0,
  position = Position.FIXED,
  useWindowScrollPosition,
  ...props
}) => {
  const [windowScrollPercentage, setWindowScrollPercentage] = useState(0);
  const updatePercentage = () =>
    requestAnimationFrame(() => {
      const { scrollY, innerHeight, document } = window;
      const p = (100 / (document.body.clientHeight - innerHeight)) * scrollY;
      setWindowScrollPercentage(p);
    });

  if (useWindowScrollPosition && typeof window !== undefined)
    useEffect(() => {
      window.addEventListener('scroll', updatePercentage);
      return () => window.removeEventListener('scroll', updatePercentage);
    }, []);

  return (
    <Container backgroundColor={backgroundColor} position={position} height={height} {...props}>
      <Inner
        barColor={barColor}
        percentage={useWindowScrollPosition ? windowScrollPercentage : percentage}
      />
    </Container>
  );
};

ProgressBar.Position = Position;

export default ProgressBar;
