import React, { Component } from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../lib/styled';
import Icon from './Icon';

const CaptionWrapper = styled.figcaption`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth};
  color: ${({ textColor }) => textColor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

class Caption extends Component {
  static defaultProps = {
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: '0',
    margin: '0',
    padding: '.75rem 0 0 0',
    textColor: '#000',
  };

  render() {
    const { children, ...props } = this.props;
    return <CaptionWrapper {...props}>{children}</CaptionWrapper>;
  }
}

const StyledFigure = styled.figure`
  max-width: 100%;
  display: block;
  width: auto;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 700px) {
    &.offGridLeft,
    &.left {
      float: left;
      max-width: 50%;
      margin-right: 20px;
    }
    &.offGridRight,
    &.right {
      float: right;
      max-width: 50%;
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    &.half {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    &.large {
      width: 100%;
    }
    &.screenWidth {
      width: 100vw;
      max-width: initial;
      margin-left: 50%;
      transform: translateX(-50vw);
    }
    &.offGridWider {
      width: 140%;
      max-width: 100vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    &.offGridLeft {
      float: left;
      max-width: 50%;
      margin-right: 20px;
      margin-left: -20%;
    }
    &.offGridRight {
      float: right;
      max-width: 50%;
      margin-left: 20px;
      margin-right: -20%;
    }
  }
`;

const Figcaption = styled(Caption)`
  > * + * {
    margin-left: 20px;
  }
  background-color: transparent;
  padding: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  box-shadow: ${({ shadow }) => (shadow ? '0 0 20px 0 rgba(0, 0, 0, 0.2)' : 'none')};
`;

const StyledCaption = styled('span')`
  color: ${({ captionColor }) => captionColor};
`;

const InfoSpan = styled.div`
  position: relative;
  display: inline;
  vertical-align: middle;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;
    stroke: #000;
    stroke-width: 2;
    fill: none;
  }
`;

export default ({
  author = '',
  borderRadius = 4,
  caption = '',
  captionColor = '#000',
  copyright = '',
  shadow = false,
  type = 'default',
  url,
  ...props
}) => (
  <StyledFigure className={`${type}`} {...fP(props)}>
    <StyledImage borderRadius={borderRadius} shadow={shadow} src={url} />
    <Figcaption textColor={captionColor} padding=".5rem">
      {caption ? <StyledCaption>{caption}</StyledCaption> : null}
      {author ? (
        <InfoSpan>
          <Icon icon="eye" title="Image author" stroke="#000" />
          {author}
        </InfoSpan>
      ) : null}
      {copyright ? (
        <InfoSpan>
          &copy;
          {copyright}
        </InfoSpan>
      ) : null}
    </Figcaption>
  </StyledFigure>
);
