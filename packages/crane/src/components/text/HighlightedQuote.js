/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Quote, Caption } from '../atoms';

const Wrapper = styled('figure')`
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${({ shadow }) => shadow};
  float: ${({ float }) => float};
  margin: ${({ wrapperMargin }) => wrapperMargin};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ wrapperPadding }) => wrapperPadding};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (min-width: 700px) {
    &.left,
    &.right {
      float: none;
      max-width: none;
      margin: inherit 0;
    }
  }
`;
const StyledQuote = styled(Quote)`
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`;
const Attribution = styled(Caption)`
  &:before {
    content: '—';
  }
`;

export default class HighlightedQuote extends Component {
  static propTypes = {
    /** Attribution of quote */
    attribution: PropTypes.string,
    /** Background color, a CSS color value, e.g. '#fff' or 'rgba(255,255,255,1)' for white */
    backgroundColor: PropTypes.string,
    /** Border color, a CSS border-color value, e.g. '#fff' or 'transparent transparent transparent #ddd' */
    borderColor: PropTypes.string,
    /** Border style, a CSS border-style value, e.g. 'solid' or 'none none none dashed' */
    borderStyle: PropTypes.string,
    /** Border width, a CSS border-width value, e.g. '2px' or '1px 1rem 1em 0' */
    borderWidth: PropTypes.string,
    /** float */
    float: PropTypes.oneOf([
      'none',
      'left',
      'right',
      'inline-start',
      'inline-end',
      'inherit',
      'initial',
      'unset',
    ]),
    /** Font weight value, e.g. '700', 'bold', 'thinner' */
    fontWeight: PropTypes.string,
    /** Line height, a line-height value, e.g. '1.4' */
    lineHeight: PropTypes.string,
    /** margins, e.g. '1rem 0' */
    margin: PropTypes.string,
    /** max-width, e.g. '50%' */
    maxWidth: PropTypes.string,
    /** padding, e.g. '1rem 0' */
    padding: PropTypes.string,
    /** Box shadow, a CSS box-shadow value, e.g. '0 0 10px 0 rgba(0,0,0,0.5)' */
    shadow: PropTypes.string,
    /** Text-align value */
    textAlign: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'start',
      'end',
      'match-parent',
      'inherit',
      'initial',
      'unset',
    ]),
    /** Text color, a CSS color value, e.g. '#000' or 'rgba(0,0,0,1)' for black */
    textColor: PropTypes.string,
    /** Text size, a CSS font-size value, e.g. '12px' or '1.5rem' */
    textSize: PropTypes.string,
    /** margins, e.g. '1rem 0' */
    wrapperMargin: PropTypes.string,
    /** padding, e.g. '1rem 0' */
    wrapperPadding: PropTypes.string,
  };

  static defaultProps = {
    attribution: '',
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: '0',
    float: 'none',
    fontWeight: 'bolder',
    lineHeight: '1',
    margin: '0',
    maxWidth: 'none',
    padding: '0',
    shadow: 'none',
    textAlign: 'center',
    textColor: '#4856C9',
    textSize: '3rem',
    wrapperMargin: '3rem 0',
    wrapperPadding: '0',
  };

  render() {
    const {
      attribution,
      backgroundColor,
      float,
      maxWidth,
      shadow,
      type,
      wrapperMargin,
      wrapperPadding,
      textAlign,
      ...props
    } = this.props;
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        float={float}
        maxWidth={maxWidth}
        shadow={shadow}
        className={`${type}`}
        wrapperMargin={wrapperMargin}
        wrapperPadding={wrapperPadding}
        textAlign={textAlign}
      >
        <StyledQuote backgroundColor="transparent" type={type} {...props} />
        {attribution ? (
          <Attribution backgroundColor="transparent">{attribution}</Attribution>
        ) : null}
      </Wrapper>
    );
  }
}
