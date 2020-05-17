import { ImageCard } from '@wingscms/react';
import { image } from '../../../../../utils';

export default () =>
  ImageCard.render({
    src: image(),
    caption: null,
    alt: null,
    size: 0,
    float: 0,
  });
