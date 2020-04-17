import React, { useEffect, useState, useRef } from 'react';

import styled, { css } from '../../lib/styled';
import { t } from '../../theme';

const Container = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  vertical-align: top;
  border-radius: 4px 0 0 4px;
  box-shadow: ${t(_ => _.shadow)};
  height: ${({ height }) => height}px;
  transition: max-height 0.15s linear;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  padding: 20px 0;
  font-family: ${t(_ => _.headerFontFamily)};
  text-transform: ${t(_ => _.uppercaseTitles)};
  font-weight: bold;
  bottom: 0;
  left: 0;
  border-radius: 4px;
  z-index: 10;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: ${t(_ => _.primaryColor)};
  }
  ${({ showFade }) =>
    !showFade
      ? null
      : css`
          &::before {
            content: '';
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            transform: translateY(-100%);
            background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 50%);
          }
        `}
`;

const useDimensions = deps => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = () => {
    const w = ref?.current?.offsetWidth;
    const h = ref?.current?.offsetHeight;
    if (!(w && h)) return;
    setDimensions({ width: w, height: h });
  };

  useEffect(() => {
    updateDimensions();
  }, deps);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return [ref, dimensions];
};

export default ({
  initialHeight = 400,
  children,
  descriptionCollapse,
  descriptionExpand,
  onToggle = () => {},
  style,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [containerRef, { width: containerWidth }] = useDimensions([children]);
  const [contentRef, { height: contentHeight }] = useDimensions([children]);
  const [toggleRef, { height: toggleHeight }] = useDimensions([children, show]);
  const toggleShow = () => setShow(!show);

  const margin = containerWidth < 400 ? 10 : 40;
  const padding = containerWidth < 400 ? 20 : 40;
  const height = !show ? initialHeight - 80 : contentHeight + padding + margin + toggleHeight;
  const showToggle = show || contentHeight + 160 > height;

  useEffect(() => {
    onToggle(show);
  }, [show]);

  return (
    <Container
      ref={containerRef}
      show={show}
      height={height}
      style={{ ...style, padding: `${padding}px ${padding}px 0`, margin: `${margin}px 0` }}
      {...props}
    >
      <Content ref={contentRef}>{children}</Content>
      {!showToggle ? null : (
        <ToggleButton
          showFade={!show}
          ref={toggleRef}
          onClick={toggleShow}
          contentHeight={contentHeight}
        >
          {show ? descriptionCollapse : descriptionExpand}
        </ToggleButton>
      )}
    </Container>
  );
};
