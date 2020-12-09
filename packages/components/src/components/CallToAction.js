import React from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';

import styled, { css } from '../lib/styled';
import { t, useTheme } from '../theme';

import _Button from './Button';
import Reveal from './Reveal';
import _Heading from './Heading';
import _Surface from './Surface';
import _Text from './Text';

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

const Type = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};

const Spacing = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const backgroundImageStyles = css`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const buttonAlignStyles = ({ align }) => {
  if (align === Align.CENTER)
    return css`
      margin-left: auto;
      margin-right: auto;
    `;
  return align === Align.LEFT
    ? ''
    : css`
        margin-left: auto;
      `;
};

const getAlignStyles = (_, { align, type }) => {
  return css`
    text-align: ${align};
    ${type === Type.HORIZONTAL
      ? _.tabletMinQuery(css`
          text-align: left;
        `)
      : null}
  `;
};

const getSpacingStyles = (_, { spacing }) => {
  switch (spacing) {
    case 'large':
      return css`
        padding: ${t(_ => `${_.extraLargeSpacing} ${_.mediumSpacing}`)};
      `;
    case 'medium':
      return css`
        padding: ${t(_ => `${_.largeSpacing} ${_.mediumSpacing}`)};
      `;
    default:
      return css`
        padding: ${t(_ => _.mediumSpacing)};
      `;
  }
};

const Surface = styled(_Surface)`
  background-color: ${t(_ => _.callToActionBackgroundColor)};
  ${({ backgroundImage }) => (backgroundImage ? backgroundImageStyles : '')}
  ${t(getSpacingStyles)}
`;

const Text = styled(_Text)`
  color: ${t(_ => _.callToActionTextColor)};
  ${t(getAlignStyles)};
`;

const Heading = styled(_Heading)`
  margin-top: 0;
  color: ${t(_ => _.callToActionTextColor)};
  ${t(getAlignStyles)};
`;

const Button = styled(_Button)`
  margin-top: ${t(_ => _.smallSpacing)};
  display: block;
  text-decoration: none;
  ${buttonAlignStyles}
`;

const InnerContainer = styled.div`
  ${t((_, { type }) =>
    !(type === Type.HORIZONTAL)
      ? null
      : _.tabletMinQuery(css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          > * {
            padding: 0;
            margin: 0;
          }
          ${Heading} {
            flex: 1 0;
          }
          ${Text} {
            flex: 1 1 calc(50% - 200px);
            padding: 0 20px;
          }
          a {
            flex: 0 0 200px;
            width: 20%;
            ${Button} {
              margin: 0;
              width: 100%;
            }
          }
        `),
  )};
`;

export default function CallToAction({
  align = Align.LEFT,
  backgroundImage,
  buttonText,
  buttonUrl,
  buttonProps,
  elevation = 1,
  type = Type.VERTICAL,
  reveal,
  spacing = Spacing.SMALL,
  title,
  text,
  ...props
}) {
  const _ = useTheme();
  return (
    <Surface
      backgroundImage={backgroundImage}
      elevation={elevation}
      spacing={spacing}
      {...filterInvalidDOMProps(props)}
    >
      <Reveal reveal={reveal}>
        <InnerContainer type={type}>
          <Heading rank={2} align={align} type={type}>
            {title}
          </Heading>
          <Text align={align} type={type}>
            {text}
          </Text>
          <a style={{ display: 'block', textDecoration: 'none' }} href={buttonUrl}>
            <Button
              align={align}
              intent={!backgroundImage ? Button.Intent.SECONDARY : Button.Intent.PRIMARY}
              {...{ backgroundColor: _.callToActionButtonColor, ...buttonProps }}
            >
              {buttonText}
            </Button>
          </a>
        </InnerContainer>
      </Reveal>
    </Surface>
  );
}

CallToAction.Align = Align;
CallToAction.Spacing = Spacing;
CallToAction.Type = Type;
