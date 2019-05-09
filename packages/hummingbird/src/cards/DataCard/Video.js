import React from 'react';
import styled from 'styled-components';
import { Video, CloudinaryVideoProvider } from '@wingscms/crane';

import wide from '../../styles/wide';

const VideoWrapper = styled.div`
  ${wide};
  > * {
    display: block;
    width: 100%;
    max-width: 1160px;
    margin: 80px auto;
  }
`;

export default props => (
  <VideoWrapper>
    <CloudinaryVideoProvider {...props}>
      <Video
        muted={props.muted || props.autoplay ? 'muted' : null}
        autoplay={props.autoplay ? 'autoplay' : null}
        playsinline="playsinline"
        poster={`//res.cloudinary.com/${props.cloudName}/video/upload/vc_auto/${props.videoId}.jpg`}
      />
    </CloudinaryVideoProvider>
  </VideoWrapper>
);
