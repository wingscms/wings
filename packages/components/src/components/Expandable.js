import React, { useState } from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const ExpandableWrapper = styled.div`
  background-color: ${t(
    (_, { backgroundColor }) => backgroundColor || _.expandableBackgroundColor,
  )};
  box-shadow: ${t(_ => _.shadow)};
  color: ${t((_, { backgroundColor }) =>
    _.contrastColor({ backgroundColor: backgroundColor || _.expandableBackgroundColor }),
  )};
  padding: ${t(_ => _.mediumSpacing)};
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  > * {
    width: 100%;
    margin: 0 auto;
  }
  ${props => {
    if (!props.open) {
      return css`
        height: ${props.height}px;
        overflow: hidden;
        padding-bottom: 50px;
      `;
    }
    return css`
      height: auto;
      overflow: hidden;
      padding-bottom: 50px;
    `;
  }};
`;

// TODO: add toggle color to theme
const Toggle = styled.div`
  background-color: ${t(
    (_, { backgroundColor }) => backgroundColor || _.expandableBackgroundColor,
  )};
  color: ${t(
    (_, { toggleColor, backgroundColor }) =>
      toggleColor ||
      _.contrastColor({ backgroundColor: backgroundColor || _.expandableBackgroundColor }),
  )};
  font-weight: bold;
  font-family: ${t((_, { toggleFontFamily }) => toggleFontFamily || _.headerFontFamily)};
  line-height: 50px;
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${t((_, { toggleHoverColor }) => toggleHoverColor || _.primaryColor)};
  }
  ${t((_, { open, backgroundColor }) =>
    open
      ? null
      : `&:after {
    display: block;
    position: absolute;
    background-image: ${(_.color(backgroundColor) || _.elementBackgroundColor).getLinearGradient({
      to: 'top',
    })};
    top: -50px;
    height: 50px;
    width: 100%;
    content: '';
  }`,
  )};
`;

export default function Expandable({
  backgroundColor,
  children,
  closeText = 'Less',
  height = 250,
  openText = 'More',
  toggleColor,
  toggleHoverColor,
  toggleFontFamily,
  theme,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const toggleHeight = () => setOpen(!open);

  return (
    <ExpandableWrapper open={open} height={height} backgroundColor={backgroundColor} {...fP(props)}>
      {children}

      <Toggle
        backgroundColor={backgroundColor}
        onClick={toggleHeight}
        open={open}
        toggleColor={toggleColor}
        toggleHoverColor={toggleHoverColor}
        toggleFontFamily={toggleFontFamily}
      >
        {open ? closeText : openText}
      </Toggle>
    </ExpandableWrapper>
  );
}
