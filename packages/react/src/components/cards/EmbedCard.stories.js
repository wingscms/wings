import { EmbedCard } from '@wingscms/react';
import { text } from '@storybook/addon-knobs';
import { contentWrap } from '../../../../../utils';

export default () =>
  EmbedCard.render({
    src: text('src', 'https://www.youtube.com/watch?v=ssgfjn8zHNI'),
  });

export const wrapStory = contentWrap;
