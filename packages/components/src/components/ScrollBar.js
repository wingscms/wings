import React, { useState, useEffect } from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';

const Container = styled.div`
  position: fixed;
  display: block;
  height: 5px;
  width: 100%;
  background-color: ${t(_ => _.scrollBarBackgroundColor)};
  top: 0;
  left: 0;
  z-index: 20;
`;

const Inner = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: ${t((_, { barColor }) => barColor || _.scrollBarColor)};
  transition: width 0.1s ease-out;
`;

export default function ScrollBar({ barColor, percentage, ...props }) {
  const [windowScrollPercentage, setWindowScrollPercentage] = useState(0);
  const updatePercentage = () => {
    if (typeof percentage === 'number') return;
    requestAnimationFrame(() => {
      const { scrollY, innerHeight, document } = window;
      const p = (100 / (document.body.clientHeight - innerHeight)) * scrollY;
      setWindowScrollPercentage(p);
    });
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', updatePercentage);
      return () => window.removeEventListener('scroll', updatePercentage);
    }
  }, []);

  return (
    <Container {...fP(props)}>
      <Inner
        barColor={barColor}
        percentage={typeof percentage === 'number' ? percentage : windowScrollPercentage}
      />
    </Container>
  );
}
