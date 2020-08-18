import React from 'react';

import AspectRatio from '../AspectRatio';
import _Surface from '../Surface';

import Image from './Image';
import Heading from './Heading';

import styled from '../../lib/styled';

const Surface = styled(_Surface)`
  width: 300px;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
`;

function Card({ children, ratio = '3:4' }) {
  return (
    <Surface elevation={1}>
      <AspectRatio ratio={ratio}>
        <Content>{children}</Content>
      </AspectRatio>
    </Surface>
  );
}

export default Card;

Card.Image = Image;
Card.Heading = Heading;
