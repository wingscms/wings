import React, { useState } from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import { t } from '../theme';

const ExpandableWrapper = styled.div`
  background-color: ${t(
    (_, { backgroundColor }) => backgroundColor || _.expandableBackgroundColor,
  )};
  border-radius: ${({ borderRadius }) => `${borderRadius || 4}px`};
  box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.05)' : 'none')};
  color: ${t((_, { backgroundColor }) =>
    _.contrastColor({ backgroundColor: backgroundColor || _.expandableBackgroundColor }),
  )}
  padding: 30px;
  margin: 40px 0;
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  max-width: 720px;
  > * {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }
  ${props => {
    if (props.expandable) {
      if (!props.open) {
        return `
          height: ${props.height || '250px'};
          overflow: hidden;
          padding-bottom: 50px;
        `;
      }
      return `
        height: auto;
        overflow: hidden;
        padding-bottom: 50px;
      `;
    }
    return '';
  }};
`;

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

export default ({
  backgroundColor,
  borderRadius = 4,
  children,
  closeText = 'Less',
  expandable = true,
  height = '250px',
  openText = 'More',
  shadow = true,
  toggleColor,
  toggleHoverColor,
  toggleFontFamily,
  theme,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const toggleHeight = () => setOpen(!open);

  return (
    <ExpandableWrapper
      expandable={expandable}
      open={open}
      height={height}
      backgroundColor={backgroundColor}
      shadow={shadow}
      borderRadius={borderRadius}
      theme={theme}
      {...fP(props)}
    >
      {children}
      {expandable ? (
        <Toggle
          backgroundColor={backgroundColor}
          onClick={toggleHeight}
          open={open}
          toggleColor={toggleColor}
          toggleHoverColor={toggleHoverColor}
          toggleFontFamily={toggleFontFamily}
          theme={theme}
        >
          {open ? closeText : openText}
        </Toggle>
      ) : null}
    </ExpandableWrapper>
  );
};
