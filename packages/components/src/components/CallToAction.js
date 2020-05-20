import React from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';

import styled, { css } from '../lib/styled';
import { t } from '../theme';

import _Button from './Button';
import Fade from './Fade';
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
  padding: ${t(_ => _.mediumSpacing)};
  background-color: ${t(_ => _.callToActionBackgroundColor)};
  ${({ backgroundImage }) => (backgroundImage ? backgroundImageStyles : '')}
  box-shadow: ${t(_ => _.shadow)}''
  width: 100%;
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
  fade = true,
  title,
  text,
  ...props
}) {
  return (
    <Container backgroundImage={backgroundImage} {...filterInvalidDOMProps(props)}>
      <Fade fade={fade}>
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
      </Fade>
    </Container>
  );
}

CallToAction.Align = Align;
