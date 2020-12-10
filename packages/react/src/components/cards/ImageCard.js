import React from 'react';
import { compose, setPropTypes, setStatic } from 'recompose';
import classNames from 'classnames';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import PropTypes from 'prop-types';
import { Reveal, _WIDE, _ALIGNLEFT, _ALIGNRIGHT, Text } from '@wingscms/components';
import styled from '../../lib/styled';
import { enumerate } from '../../lib/utils';
import createCard from '../../createCard';
import { t } from '../../theme';

// TODO: refactor and create Image more versatile component in components package

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
  margin: ${t(_ => _.mediumSpacing)} 0;
  @media screen and (min-width: 800px) {
    margin-top: ${t(_ => _.largeSpacing)};
    margin-bottom: ${t(_ => _.largeSpacing)};
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
  figcaption {
    padding: 10px;
    text-align: center;
    ${t(_ => Text.getStyles(_))}
  }
  &.size-${SIZE.MEDIUM} {
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  &.size-${SIZE.LARGE} {
    ${_WIDE};
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
    ${_WIDE};
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
    ${_ALIGNLEFT};
    @media screen and (min-width: 800px) {
      figcaption {
        padding: 10px 0;
      }
    }
  }
  &.align-${FLOAT.RIGHT} {
    ${_ALIGNRIGHT};
    @media screen and (min-width: 800px) {
      figcaption {
        padding: 10px 0;
      }
    }
  }
`;

const ImageCard = compose(
  setPropTypes(propTypes),
  setStatic('defaultProps', defaultProps),
)(({ size, float, className, mediaId, url, caption, onClick, _mediaId, ...props }) => (
  <Reveal reveal>
    <Image
      onClick={onClick}
      className={classNames(`size-${size}`, className, {
        [`align-${float}`]: size === SIZE.MEDIUM,
      })}
    >
      <img {...filterInvalidDOMProps(props)} />
      {!caption ? null : <figcaption>{caption}</figcaption>}
    </Image>
  </Reveal>
));

export default createCard({
  name: 'ImageCard',
  renderWith: ImageCard,
});
