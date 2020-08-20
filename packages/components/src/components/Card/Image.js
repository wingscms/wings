import React from 'react';

import AspectRatio from '../AspectRatio';
import _Surface from '../Surface';

import styled from '../../lib/styled';

const Surface = styled(_Surface)`
  background-image: url('${({ image }) => image}');
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
  border-radius: 0;
`;

export default ({ image = {}, elevation, ratio = '16:9', ...props }) => (
  <Surface elevation={elevation} image={image.src} {...props}>
    <AspectRatio ratio={ratio}></AspectRatio>
  </Surface>
);
