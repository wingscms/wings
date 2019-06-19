import React from 'react';
import styled from 'styled-components';
import { boolean, number } from '@storybook/addon-knobs/react';
import Gallery from '../../../src/components/gallery';

import coffeeshop from '../../img/coffeeshop.jpg';
import field from '../../img/field.jpg';
import jellyfish from '../../img/jellyfish.jpg';
import street from '../../img/street.jpg';

const items = [
  {
    url: coffeeshop,
    description: 'This is a picture of a coffeeshop',
  },
  {
    url: field,
    description: 'This is a picture of a field',
  },
  {
    url: jellyfish,
    description: 'This is a picture of a jellyfish',
  },
  {
    url: street,
    description: 'This is a picture of a street',
  },
];

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const GalleryInfo = `
  documentation...
`;

export const GalleryStory = () => (
  <Wrapper>
    <Gallery
      items={items}
      fullWidth={boolean('full width', false)}
      autoplay={boolean('autoplay', true)}
      showControls={boolean('controls', true)}
      showDots={boolean('dots', true)}
      lightbox={boolean('lightboxes', true)}
      delay={number('transition delay', 6000)}
    />
  </Wrapper>
);
