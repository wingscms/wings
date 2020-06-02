import { ChapterCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  ChapterCard.render({
    title: 'Section One',
    text: 'This is an introduction to the first section of the article',
    marker: 1,
  });

export const wrapStory = contentWrap;
