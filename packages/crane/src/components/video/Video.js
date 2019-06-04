import styled from 'styled-components';
import React, { Component } from 'react';
import { randomString } from '../../lib/utils';
import { AudioOn, AudioOff } from '../icons';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
`;

const StyledVideo = styled.video`
  display: block;
  width: 100%;
`;

const MuteIcon = styled.div`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  z-index: 10;
  svg {
    filter: drop-shadow(0 0 5px #000);
    path {
      fill: #fff;
    }
  }
`;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: `video-${randomString()}`,
      muted: this.props.muted,
    };
  }

  mapUrls() {
    return this.props.urls.map(x => <source key={x.id} src={x.src} type={x.type} />);
  }

  getVideo() {
    return document.getElementById(this.state.videoId);
  }

  componentDidMount() {
    this.getVideo().addEventListener('volumechange', (e) => {
      if (e.target.volume === 0 || e.target.muted) {
        return this.setState({ muted: true });
      }
      return this.setState({ muted: false });
    });
  }

  render() {
    // eslint-disable-next-line
    return (
      <Wrapper>
        <StyledVideo controls {...this.props} id={this.state.videoId}>
          {this.mapUrls()}
        </StyledVideo>
        {this.props.autoplay ? (
          <MuteIcon
            onClick={() => {
              this.getVideo().muted = !this.getVideo().muted;
            }}
          >
            {this.state.muted ? <AudioOff /> : <AudioOn />}
          </MuteIcon>
        ) : null}
      </Wrapper>
    );
  }
}
