/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Play, Pause } from '../../../../img/svg';

const icon = css`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  transition: all linear 0.1s;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const AudioOuterWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 70px 0;
`;

const AudioInnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 54px;
  border-radius: 27px;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  padding: 0 20px;
`;

const StyledPlay = styled(Play)`
  ${icon} display: inline-block;
  vertical-align: top;
`;

const StyledPause = styled(Pause)`
  ${icon} display: inline-block;
  vertical-align: top;
`;

const Timeline = styled.div`
  display: inline-block;
  width: calc(100% - 80px);
  margin-left: 20px;
  height: 4px;
  border-radius: 15px;
  background: #eeeeee;
  position: relative;
  margin-top: 23px;
  vertical-align: top;
  cursor: pointer;
`;

const TimelineInner = styled.div`
  width: 0;
  height: 4px;
  border-radius: 15px;
  background: ${({ theme }) => theme.primaryColor};
  position: absolute;
`;

const TimelineHover = styled.div`
  width: 0;
  height: 4px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 1;
`;

const Handle = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-top: -7px;
  background: rgba(0, 0, 0, 1);
  cursor: grab;
  transition: opacity linear 0.1s;
  z-index: 2;
  &:hover {
    opacity: 0.7;
  }
`;

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
    };
    this.togglePlayback = this.togglePlayback.bind(this);
  }

  componentDidMount() {
    this.player.addEventListener('timeupdate', () => {
      const ratio = this.player.currentTime / this.player.duration;
      const position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
    });
    this.handle.addEventListener('mousemove', this.handleMouseMoveTimeline);
  }

  togglePlayback() {
    if (this.state.paused) {
      this.setState({ paused: !this.state.paused });
      this.player.play();
    } else {
      this.setState({ paused: !this.state.paused });
      this.player.pause();
    }
  }

  positionHandle = (x) => {
    const timelineWidth = this.timeline.clientWidth;
    if (x >= 0 && x <= timelineWidth) {
      this.handle.style.marginLeft = `${x}px`;
      this.timelineInner.style.width = `${x}px`;
    } else if (x < 0) {
      this.handle.style.marginLeft = '0px';
      this.timelineInner.style.width = '0px';
    } else if (x > timelineWidth) {
      this.handle.style.marginLeft = `${timelineWidth}px`;
      this.timelineInner.style.width = `${timelineWidth}px`;
    }
  };

  handleMouseMove = (e) => {
    e.stopPropagation();
    this.timelineHover.style.width = '0px';
    const rect = this.timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.player.currentTime = x / this.timeline.offsetWidth * this.player.duration;
    this.positionHandle(x);
  };

  handleMouseMoveTimeline = (e) => {
    e.stopPropagation();
    this.timelineHover.style.width = '0px';
  };

  handleMouseOut = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseOver = (e) => {
    e.stopPropagation();
    this.timelineHover.style.width = '0px';
  };

  handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    this.handle.removeEventListener('mousemove', this.handleMouseMoveTimeline);
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    this.handle.addEventListener('mousemove', this.handleMouseMoveTimeline);
  };

  timelineClick = (e) => {
    const rect = this.timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.player.currentTime = x / this.timeline.offsetWidth * this.player.duration;
    this.positionHandle(x);
  };

  timelineHoverMouseMove = (e) => {
    const rect = this.timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.timelineHover.style.width = `${x}px`;
  };

  timelineHoverMouseOut = () => {
    this.timelineHover.style.width = '0px';
  };

  render() {
    const { src } = this.props;
    const { paused } = this.state;
    return (
      <AudioOuterWrapper>
        <AudioInnerWrapper>
          {paused ? (
            <StyledPlay onClick={() => this.togglePlayback()} />
          ) : (
            <StyledPause onClick={() => this.togglePlayback()} />
          )}
          <Timeline
            id="timeline"
            ref={(timeline) => {
              this.timeline = timeline;
            }}
            onClick={this.timelineClick}
            onMouseMove={this.timelineHoverMouseMove}
            onMouseOut={this.timelineHoverMouseOut}
          >
            <TimelineInner
              id="timelineInner"
              ref={(timelineInner) => {
                this.timelineInner = timelineInner;
              }}
            />
            <TimelineHover
              id="timelineHover"
              ref={(timelineHover) => {
                this.timelineHover = timelineHover;
              }}
            />
            <Handle
              id="handle"
              ref={(handle) => {
                this.handle = handle;
              }}
              onMouseDown={this.handleMouseDown}
              onMouseOver={this.handleMouseOver}
            />
          </Timeline>
          {/* eslint-disable-next-line */}
          <audio ref={player => (this.player = player)}>
            <source src={src} />
          </audio>
        </AudioInnerWrapper>
      </AudioOuterWrapper>
    );
  }
}
