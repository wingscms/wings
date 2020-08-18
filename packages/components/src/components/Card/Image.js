import React from 'react';

import AspectRatio from '../AspectRatio';
import _Surface from '../Surface';

import styled, { css } from '../../lib/styled';

const getPosition = ({ position }) => {
  switch (position) {
    case 'bottom':
      return css`
        align-self: end;
      `;
    default:
      return css`
        align-self: start;
      `;
  }
};

const Surface = styled(_Surface)`
  background-image: url('${({ image }) => image}');
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
  ${getPosition};
`;

export default ({ image = {}, elevation, ratio = '16:9', position = 'top', ...props }) => (
  <Surface elevation={elevation} image={image.src} position={position} {...props}>
    <AspectRatio ratio={ratio}></AspectRatio>
  </Surface>
);
