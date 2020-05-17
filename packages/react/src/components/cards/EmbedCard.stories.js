import { EmbedCard } from '@wingscms/react';

export default () =>
  EmbedCard.render({
    src: 'https://www.youtube.com/watch?v=Htckxql7GRA',
    html:
      '<iframe width="480" height="270" src="https://www.youtube.com/embed/Htckxql7GRA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  });
