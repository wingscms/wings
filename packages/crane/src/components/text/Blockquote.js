/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Caption, Quote } from '../atoms';
import { Quote as QuoteIcon } from '../icons';

const BlockquoteWrapper = styled('figure')`
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${({ shadow }) => shadow};
  margin: ${({ wrapperMargin }) => wrapperMargin};
  padding: ${({ wrapperPadding }) => wrapperPadding};
  text-align: ${({ textAlign }) => textAlign};
  position: relative;
  blockquote {
    > *:first-child {
      margin-top: 0;
    }
    > *:last-child {
      margin-bottom: 0;
    }
  }
`;

const BlockquoteIcon = styled('span')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    fill: ${({ theme }) => theme.colorIcon};
    width: 48px;
    height: 48px;
  }
`;

const Attribution = styled(Caption)`
  &:before {
    content: '—';
  }
`;

export default class Blockquote extends Component {
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
    /** decoration icon */
    decorationIcon: PropTypes.element,
    /** Font weight value, e.g. '700', 'bold', 'thinner' */
    fontWeight: PropTypes.string,
    /** show a decorative icon */
    hasDecoration: PropTypes.bool,
    /** Line height, a line-height value, e.g. '1.4' */
    lineHeight: PropTypes.string,
    /** margins, e.g. '1rem 0' */
    margin: PropTypes.string,
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
    /** padding, e.g. '1rem 0' */
    attributionPadding: PropTypes.string,
  };

  static defaultProps = {
    attribution: '',
    backgroundColor: '#fff',
    borderColor: '#4856C9',
    borderStyle: 'none none none solid',
    borderWidth: '5px',
    decorationIcon: <QuoteIcon />,
    fontWeight: 'inherit',
    hasDecoration: false,
    lineHeight: 'inherit',
    margin: '0',
    wrapperMargin: '1rem 0 1rem calc(calc(1rem + 5px) * -1)',
    wrapperPadding: '0',
    padding: '0 0 0 1rem',
    shadow: 'none',
    textAlign: 'inherit',
    textColor: '#000',
    textSize: 'inherit',
    attributionPadding: '.5rem 0 0 calc(1rem + 5px)',
  };

  render() {
    const {
      attribution,
      backgroundColor,
      decorationIcon,
      hasDecoration,
      shadow,
      textAlign,
      wrapperMargin,
      wrapperPadding,
      attributionPadding,
      ...props
    } = this.props;
    return (
      <BlockquoteWrapper
        backgroundColor={backgroundColor}
        shadow={shadow}
        textAlign={textAlign}
        wrapperMargin={wrapperMargin}
        wrapperPadding={wrapperPadding}
      >
        {hasDecoration ? <BlockquoteIcon>{decorationIcon}</BlockquoteIcon> : null}

        <Quote backgroundColor="transparent" {...props} />
        {attribution ? (
          <Attribution backgroundColor="transparent" padding={attributionPadding}>
            {attribution}
          </Attribution>
        ) : null}
      </BlockquoteWrapper>
    );
  }
}
