import React from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';

import styled, { css } from '../lib/styled';
import { t } from '../theme';

import _Button from './Button';
import Reveal from './Reveal';
import _Heading from './Heading';
import _Text from './Text';

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
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

const Container = styled.div`
  width: 100%;
  padding: ${t(_ => _.mediumSpacing)};
  background-color: ${t(_ => _.callToActionBackgroundColor)};
  box-shadow: ${t(_ => _.shadow)};
  ${({ backgroundImage }) => (backgroundImage ? backgroundImageStyles : '')}
`;

const Text = styled(_Text)`
  color: ${t(_ => _.callToActionTextColor)};
  text-align: ${({ align }) => align};
`;

const Heading = styled(_Heading)`
  margin-top: 0;
  color: ${t(_ => _.callToActionTextColor)};
  text-align: ${({ align }) => align};
`;

const Button = styled(_Button)`
  margin-top: ${t(_ => _.smallSpacing)};
  display: block;
  text-decoration: none;
  ${buttonAlignStyles}
`;

export default function CallToAction({
  align = Align.LEFT,
  backgroundImage,
  buttonText,
  buttonUrl,
  reveal,
  title,
  text,
  ...props
}) {
  return (
    <Container backgroundImage={backgroundImage} {...filterInvalidDOMProps(props)}>
      <Reveal reveal={reveal}>
        <Heading rank={2} align={align}>
          {title}
        </Heading>
        <Text align={align}>{text}</Text>
        <a style={{ display: 'block', textDecoration: 'none' }} href={buttonUrl}>
          <Button
            align={align}
            intent={!backgroundImage ? Button.Intent.SECONDARY : Button.Intent.PRIMARY}
          >
            {buttonText}
          </Button>
        </a>
      </Reveal>
    </Container>
  );
}

CallToAction.Align = Align;
