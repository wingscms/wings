/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../../lib/styled';
import GalleryImage from './GalleryImage';
import Dots from './Dots';
import { ChevronRight, ChevronLeft, Pause, Play } from '../icons';
import { randomString } from '../../lib/utils';

const ContainerOuter = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  &.fullwidth {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50vw);
  }
  .left,
  .right {
    position: absolute;
    width: 48px;
    height: 48px;
    margin-bottom: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    stroke: #fff;
    stroke-linecap: butt;
    stroke-width: 2;
    fill: none;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
  .play,
  .pause {
    position: absolute;
    left: 10px;
    bottom: 20px;
    margin-bottom: 0;
    width: 24px;
    height: 24px;
    stroke: #fff;
    stroke-width: 2;
    fill: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContainerInner = styled.div`
  display: block;
  position: relative;
  width: ${({ itemCount }) => (itemCount ? itemCount * 100 : '100')}%;
  height: 100%;
  transition: 0.3s all linear;
  margin-left: -${({ currentItem }) => (currentItem > 0 ? currentItem * 100 : 0)}%;
`;

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: this.props.items.length,
      currentItem: 0,
      autoplay: this.props.autoplay || false,
      playing: this.props.autoplay || false,
    };
    this.interval = null;
    this.setItem = this.setItem.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.prevItem = this.prevItem.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  static propTypes = {
    /** Determines whether the gallery should autoplay when the component mounts */
    autoplay: PropTypes.bool,
    /** The transition delay time between images when playing (miliseconds) */
    delay: PropTypes.number,
    /** Determines whether the gallery should stratch to the full width of the window or stay within its container */
    fullWidth: PropTypes.bool,
    /** Determines whether a lightbox should be shown when clicking on an image */
    lightbox: PropTypes.bool,
    /** Toggles the gallery controls (pause/play/etc) */
    showControls: PropTypes.bool,
    /** Toggles the dots that can be used to navigate between images */
    showDots: PropTypes.bool,
  };

  static defaultProps = {
    autoplay: true,
    delay: 6000,
    fullWidth: false,
    lightbox: true,
    showControls: false,
    showDots: false,
  };

  componentDidMount() {
    const { autoplay } = this.state;
    if (autoplay) {
      this.play();
    }
  }

  // Updates the current item
  setItem(item) {
    this.setState({ currentItem: item });
  }

  // Updates the current item to the next item, or if the first item if at end of array.
  nextItem() {
    const { itemCount, currentItem } = this.state;
    if (currentItem + 1 === itemCount) {
      return this.setItem(0);
    }
    return this.setItem(currentItem + 1);
  }

  // Updates the current item to the previous item, or if the last item if at beginning of array.
  prevItem() {
    const { itemCount, currentItem } = this.state;
    if (currentItem - 1 < 0) {
      return this.setItem(itemCount - 1);
    }
    return this.setItem(currentItem - 1);
  }

  // Starts playing of content, sets interval
  play() {
    const delay = this.props.delay || 6000;
    const interval = setInterval(() => {
      this.nextItem();
    }, delay);
    this.interval = interval;
    this.setState({ playing: true });
  }

  // Stops playing of content, clears interval
  pause() {
    clearInterval(this.interval);
    this.setState({ playing: false });
  }

  render() {
    const { fullWidth, showControls, items, lightbox, showDots } = this.props;
    const { playing, itemCount, currentItem } = this.state;
    const PlayPause = playing ? (
      <Pause className="pause" title="Pause" onClick={() => this.pause()} />
    ) : (
        <Play className="play" title="Play" onClick={() => this.play()} />
      );

    return (
      <ContainerOuter className={fullWidth ? 'fullwidth' : ''}>
        <ContainerInner itemCount={itemCount} currentItem={currentItem}>
          {items.map(item => (
            <GalleryImage
              key={randomString()}
              itemCount={itemCount}
              item={item}
              lightbox={lightbox}
            />
          ))}
        </ContainerInner>
        {showDots ? <Dots items={items} currentItem={currentItem} callback={this.setItem} /> : null}
        {showControls ? PlayPause : null}
        <ChevronLeft className="left" title="previous image" onClick={() => this.prevItem()} />
        <ChevronRight className="right" title="next image" onClick={() => this.prevItem()} />
      </ContainerOuter>
    );
  }
}
