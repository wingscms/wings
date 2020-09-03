import React from 'react';

import _Surface from '../Surface';
import Heading from '../Heading';
import Text from '../Text';

import styled, { css } from '../../lib/styled';
import { t } from '../../theme';

const Surface = styled(_Surface)`
  display: block;
  position: absolute;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 10px 20px 10px 20px;
  height: auto;
  border-radius: 0;
  top: 100%;
  transform: translateY(-106px);
  transition: all 0.2s ease-in-out;
  ${({ active }) =>
    !active
      ? null
      : css`
          transform: translateY(-99%);
        `}
`;

const TitleWrapper = styled(_Surface)`
  border-radius: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  position: relative;
  min-height: 86px;
  ${({ active }) =>
    !active
      ? null
      : css`
          height: auto;
          overflow: auto;
        `}
`;

const Title = styled(Heading)`
  position: relative;
  user-select: none;
  transition: 0.2s all ease-in-out;
  font-size: 20px;
  line-height: 26px;
  max-height: 80px;
  margin: auto;
  overflow: hidden;
  padding: 0 1rem 0 0;
  width: 100%;
  &:before {
    font-size: 20px;
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: bold;
    z-index: 5;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1.1rem;
    height: 2rem;
    margin-top: 0.3rem;
    background: ${t(_ => _.surfaceBackgroundColor)};
    z-index: 10;
  }
  ${({ active }) =>
    !active
      ? null
      : css`
          max-height: 100%;
          overflow: hidden;
        `}
`;

const Subtitle = styled(Text)`
  user-select: none;
  width: 100%;
  margin: 10px 0;
  padding: 0;
  font-size: 16px;
  line-height: 22px;
  &.labelText {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    padding: 0;
  }
`;

export default function HeadingReveal({ active, title, subtitle, children, elevation, ...props }) {
  return (
    <Surface elevation={elevation} active={active} {...props}>
      {!title ? null : (
        <TitleWrapper active={active}>
          <Title active={active}>{title}</Title>
        </TitleWrapper>
      )}
      {!subtitle ? null : <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Surface>
  );
}
