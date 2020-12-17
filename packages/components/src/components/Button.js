import React from 'react';
import fP from 'filter-invalid-dom-props';

import { default as _Icon } from './Icon';
import _Loading from './Loading';
import _Surface from './Surface';

import Theme, { t } from '../theme';
import styled, { css } from '../lib/styled';

const Icon = styled(_Icon)`
  display: inline;
  width: 1.3em;
  vertical-align: middle;
  margin-right: ${t(_ => _.extraSmallSpacing)};
  fill: currentColor;
`;

const Loading = styled(_Loading)`
  margin: 0;
`;

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const Type = {
  NORMAL: 'normal',
  OPACITY: 'opacity',
  OUTLINE: 'outline',
};

const LOADING_SIZE = {
  [Size.SMALL]: Loading.Size.MINI,
  [Size.MEDIUM]: Loading.Size.SMALL,
};

const getType = (
  _,
  { color, hoverColor, borderColor, borderHoverColor, buttonType, textColor, textHoverColor },
) => {
  switch (buttonType) {
    case Type.OUTLINE:
      return css`
        padding: 14px 38px;
        border: 2px solid ${color};
        background-color: transparent;
        color: ${textColor || color};
        &:hover,
        &:active {
          border: 2px solid ${hoverColor};
          color: ${textHoverColor || hoverColor};
          background-image: none;
          text-decoration: none;
        }
      `;
    case Type.OPACITY:
      return css`
        border: ${borderColor ? `2px solid ${borderColor}` : 'none'};
        background-color: ${color};
        color: ${textColor || _.contrastColor({ backgroundColor: color })};
        &:hover,
        &:active {
          opacity: 0.9;
          background-image: none;
          text-decoration: none;
        }
        &:active {
          transform: translateY(1px);
        }
      `;
    default:
      return css`
        border: ${borderColor ? `2px solid ${borderColor}` : 'none'};
        background-color: ${color};
        color: ${textColor || _.contrastColor({ backgroundColor: color })};
        svg {
          fill: currentColor;
        }
        &:hover,
        &:active {
          border: ${borderColor ? `2px solid ${borderHoverColor}` : 'none'};
          background-color: ${hoverColor};
          color: ${textHoverColor || _.contrastColor({ backgroundColor: hoverColor })};
          background-image: none;
          text-decoration: none;
        }
      `;
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case Size.SMALL:
      return css`
        font-size: 14px;
        padding: 10px 20px;
      `;
    default:
      return '';
  }
};

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const Surface = styled(_Surface)`
  ${t(
    (
      _,
      {
        intent,
        size,
        buttonType,
        backgroundColor,
        backgroundHoverColor,
        borderColor,
        borderHoverColor,
        textColor,
        textHoverColor,
        disabled,
      },
    ) => {
      const color = backgroundColor || _.intentColor(intent);
      const hoverColor = backgroundHoverColor || _.darken(color).toString();
      const buttonTypeCSS = getType(_, {
        color,
        hoverColor,
        borderColor,
        borderHoverColor,
        buttonType,
        textColor,
        textHoverColor,
      });
      const sizeCSS = getSize({ size });

      return css`
        background-color: ${color};
        color: ${_.contrastColor({ backgroundColor: color })};
        text-decoration: none;
        background-image: none;
        ${LoadingWrapper} {
          background-color: ${color};
        }
        font-size: 1em;
        padding: ${borderColor ? '14px 38px' : '16px 40px'};
        border: 0;
        border-radius: ${_.buttonBorderRadius};
        cursor: pointer;
        position: relative;
        transition: all 0.15s ease-in-out;
        font-family: ${_.headerFontFamily};
        font-weight: bold;
        text-transform: ${_.titleTransform};
        ${buttonTypeCSS}
        ${sizeCSS}
        ${
          !disabled
            ? null
            : css`
                background-color: ${_.disabledColor};
                border-color: ${_.disabledColor};
                color: ${_.contrastColor({ backgroundColor: _.disabledColor })};
                cursor: not-allowed;
                ${LoadingWrapper} {
                  background-color: ${_.disabledColor};
                }
                &:hover,
                &:active {
                  border-color: ${_.disabledColor};
                  background-color: ${_.disabledColor};
                }
              `
        }
      `;
    },
  )}
`;

export default function Button({
  disabled: disabledProp,
  loading,
  icon,
  children,
  intent,
  buttonType,
  backgroundColor,
  backgroundHoverColor,
  borderColor,
  borderHoverColor,
  textColor,
  textHoverColor,
  size = Size.MEDIUM,
  ...props
}) {
  const disabled = loading || disabledProp;
  return (
    <Surface
      as="button"
      disabled={disabled}
      intent={intent}
      size={size}
      buttonType={buttonType}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      borderColor={borderColor}
      borderHoverColor={borderHoverColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
      {...fP(props)}
    >
      {!loading ? null : (
        <LoadingWrapper>
          <Loading intent={intent} size={LOADING_SIZE[size]} />
        </LoadingWrapper>
      )}
      {icon && <Icon intent={intent} icon={icon} />}
      {children}
    </Surface>
  );
}

Button.Intent = Theme.Intent;
Button.Size = Size;
Button.Type = Type;
