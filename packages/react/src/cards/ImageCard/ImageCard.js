import React, { Component } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import filterProps from 'filter-invalid-dom-props';
import PropTypes from 'prop-types';
import { enumerate } from '../../lib/utils';

const SIZE = enumerate('MEDIUM', 'LARGE', 'EXTRALARGE');
const FLOAT = enumerate('NONE', 'LEFT', 'RIGHT');

const Image = styled.figure`
  background: #f5f8fa;
  margin-left: 0;
  margin-right: 0;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: auto;
  }
  figcaption {
    background: #f5f8fa;
    font-size: 14px;
    line-height: 1.4;
    padding: 10px;
  }
  &.align-${FLOAT.LEFT} {
    float: left;
    margin-right: 1rem;
  }
  &.align-${FLOAT.RIGHT} {
    float: right;
    margin-left: 1rem;
  }
  &.size-${SIZE.MEDIUM} {
    width: 50%;
  }
  &.size-${SIZE.LARGE} {
    width: 100%;
  }
  &.size-${SIZE.EXTRALARGE} {
    width: auto;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`;

export default class ImageCard extends Component {
  static SIZE = SIZE;
  static FLOAT = FLOAT;
  static propTypes = {
    mediaId: PropTypes.string,
    url: PropTypes.string,
    src: PropTypes.string,
    large: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    size: PropTypes.number,
    float: PropTypes.number,
  };
  static defaultProps = {
    mediaId: '',
    url: '',
    large: '',
    src: '',
    alt: '',
    caption: '',
    size: SIZE.LARGE,
    float: FLOAT.NONE,
  };
  render() {
    const { size, float, className, caption, onClick, ...props } = this.props;
    return (
      <Image
        onClick={onClick}
        className={classNames(`size-${size}`, className, {
          [`align-${float}`]: size === SIZE.MEDIUM,
        })}
      >
        <img {...filterProps(props)} />
        {!caption ? null : <figcaption>{caption}</figcaption>}
      </Image>
    );
  }
}
