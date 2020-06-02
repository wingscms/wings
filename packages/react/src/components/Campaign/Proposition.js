import React, { useState, useRef } from 'react';
import { useDimensions } from '@wingscms/components';

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
  padding: 0 ${t(_ => _.smallSpacing)};
  margin-bottom: ${t(_ => _.extraSmallSpacing)};
  @media screen and (min-width: 1000px) {
    padding: 0 ${t(_ => _.mediumSpacing)};
    margin-top: ${t(_ => _.mediumSpacing)};
    width: calc(100% - ${({ formWidth }) => formWidth});
  }
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
  text-transform: ${t(_ => _.titleTransform)};
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

export default function Proposition({
  initialHeight = 400,
  children,
  descriptionCollapse,
  descriptionExpand,
  onToggle = () => {},
  formWidth,
  style,
  ...props
}) {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
  const { width: containerWidth } = useDimensions(containerRef, [children]);
  const contentRef = useRef(null);
  const { height: contentHeight } = useDimensions(contentRef, [children]);
  const toggleRef = useRef(null);
  const { height: toggleHeight } = useDimensions(toggleRef, [children, show]);

  const toggleShow = () => {
    const newState = !show;
    setShow(newState);
    onToggle(newState);
  };

  const margin = containerWidth < 400 ? 10 : 40;
  const padding = containerWidth < 400 ? 20 : 40;
  const height = !show ? initialHeight - 80 : contentHeight + padding + margin + toggleHeight;
  const showToggle = show || contentHeight + 160 > height;

  return (
    <Container ref={containerRef} show={show} height={height} formWidth={formWidth} {...props}>
      <Content ref={contentRef}>{children}</Content>
      {!showToggle ? null : (
        <ToggleButton
          showFade={!show}
          ref={toggleRef}
          onClick={() => toggleShow()}
          contentHeight={contentHeight}
        >
          {show ? descriptionCollapse : descriptionExpand}
        </ToggleButton>
      )}
    </Container>
  );
}
