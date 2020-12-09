import { EmbedCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  EmbedCard.render({
    src: 'https://www.youtube.com/watch?v=ssgfjn8zHNI',
    html:
      '<iframe width="480" height="270" src="https://www.youtube.com/embed/ssgfjn8zHNI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  });

export const wrapStory = contentWrap;
