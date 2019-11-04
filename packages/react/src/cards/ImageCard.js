import React from 'react';
import styled from 'styled-components';
import { compose, setPropTypes, setStatic } from 'recompose';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { wide, ALIGNLEFT, ALIGNRIGHT } from '@wingscms/crane';
import { enumerate } from '../lib/utils';
import createCard from '../createCard';

const SIZE = enumerate('MEDIUM', 'LARGE', 'EXTRALARGE');
const FLOAT = enumerate('NONE', 'LEFT', 'RIGHT');

const propTypes = {
  mediaId: PropTypes.string.isRequired,
  url: PropTypes.string,
  src: PropTypes.string,
  large: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  size: PropTypes.number,
  float: PropTypes.number,
};

const defaultProps = {
  mediaId: '',
  url: '',
  large: '',
  src: '',
  alt: '',
  caption: '',
  size: SIZE.LARGE,
  float: FLOAT.NONE,
};

const Image = styled.figure`
  margin: ${({ theme }) => theme.mediumSpacing} 0;
  @media screen and (min-width: 800px) {
    margin-top: ${({ theme }) => theme.largeSpacing};
    margin-bottom: ${({ theme }) => theme.largeSpacing};
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
  figcaption {
    font-size: 14px;
    line-height: 1.4;
    padding: 10px;
    color: #4a4a4a;
  }
  &.size-${SIZE.MEDIUM} {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  &.size-${SIZE.LARGE} {
    ${wide};
    img {
      max-width: 1200px;
      width: 100%;
    }
    figcaption {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      @media screen and (min-width: 1200px) {
        padding: 10px 0;
      }
    }
  }
  &.size-${SIZE.EXTRALARGE} {
    ${wide};
    img {
      max-width: 1600px;
      width: 100%;
    }
    figcaption {
      max-width: 1600px;
      width: 100%;
      margin: 0 auto;
      @media screen and (min-width: 1600px) {
        padding: 10px 0;
      }
    }
  }
  &.align-${FLOAT.LEFT} {
    ${ALIGNLEFT};
    @media screen and (min-width: 800px) {
      figcaption {
        padding: 10px 0;
      }
    }
  }
  &.align-${FLOAT.RIGHT} {
    ${ALIGNRIGHT};
    @media screen and (min-width: 800px) {
      figcaption {
        padding: 10px 0;
      }
    }
  }
`;

/* eslint-disable jsx-a11y/alt-text */
const ImageCard = compose(
  setPropTypes(propTypes),
  setStatic('defaultProps', defaultProps),
)(({ size, float, className, mediaId, url, caption, onClick, _mediaId, ...props }) => (
  <Fade bottom distance="20px">
    <Image
      onClick={onClick}
      className={classNames(`size-${size}`, className, {
        [`align-${float}`]: size === SIZE.MEDIUM,
      })}
    >
      <img {...props} />
      {!caption ? null : <figcaption>{caption}</figcaption>}
    </Image>
  </Fade>
));
/* eslint-enable jsx-a11y/alt-text */

export default createCard({
  name: 'ImageCard',
  renderWith: ImageCard,
});
