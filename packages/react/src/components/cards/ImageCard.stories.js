import { ImageCard } from '@wingscms/react';
import { image } from '../../../../../utils';
import { contentWrap } from '../../../../../.storybook/utils';

export default () =>
  ImageCard.render({
    src: image(),
    caption: null,
    alt: null,
    size: 0,
    float: 0,
  });

export const storyWrap = contentWrap;
