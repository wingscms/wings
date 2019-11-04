import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% - 460px);
  padding: 40px 40px ${({ containerInnerHeight }) => (containerInnerHeight > 600 ? '80px' : '40px')}
    40px;
  margin: 40px 0;
  overflow: hidden;
  background-color: #fff;
  vertical-align: top;
  border-radius: 4px 0 0 4px;
  box-shadow: ${({ theme }) => theme.defaultShadow};
  max-height: ${({ show, height, containerInnerHeight }) =>
    (!show && height ? `${height - 80}px` : `${containerInnerHeight + 200}px`)};
  transition: max-height 0.15s linear;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    margin: 10px 0;
    padding: 20px 20px
      ${({ containerInnerHeight }) => (containerInnerHeight > 600 ? '80px' : '20px')} 20px;
    max-height: ${({ show, containerInnerHeight }) =>
    (!show ? '600px' : `${containerInnerHeight + 200}px`)};
  }
`;

const ContainerInner = styled.div`
  width: 100%;
  height: auto;
`;

const ToggleButton = styled.div`
  display: ${({ showToggle }) => (showToggle ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  padding: 20px 0;
  font-family: ${({ theme }) => theme.headerFontFamily};
  font-weight: bold;
  bottom: 0;
  left: 0;
  border-radius: 4px;
  z-index: 10;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
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
  @media screen and (max-width: 1000px) {
    display: ${({ containerInnerHeight }) => (containerInnerHeight > 600 ? 'block' : 'none')};
  }
`;

export default ({
  campaignContainerRef,
  formContainerRef,
  campaign,
  children,
  descriptionCollapse,
  descriptionExpand,
}) => {
  const containerInnerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const containerInnerHeight =
    containerInnerRef && containerInnerRef.current && containerInnerRef.current.offsetHeight;
  const toggleShow = () => {
    if (show) {
      campaignContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const updateHeight = () => {
    const { offsetHeight } = formContainerRef.current;
    setHeight(offsetHeight);
    if (formContainerRef.current.offsetHeight > containerInnerRef.current.offsetHeight + 160) {
      setShowToggle(false);
    } else {
      setShowToggle(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  useEffect(updateHeight, [campaign]);

  return (
    <Container height={height} show={show} containerInnerHeight={containerInnerHeight}>
      <ContainerInner ref={containerInnerRef}>{children}</ContainerInner>
      <ToggleButton
        onClick={toggleShow}
        showToggle={showToggle}
        containerInnerHeight={containerInnerHeight}
      >
        {show ? descriptionCollapse : descriptionExpand}
      </ToggleButton>
    </Container>
  );
};
