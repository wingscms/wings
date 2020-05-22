import { ChapterCard } from '@wingscms/react';
import { text, color, number } from '@storybook/addon-knobs/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  ChapterCard.render({
    title: text('title', 'Section One'),
    text: text('text', 'This is an introduction to the first section of the article'),
    number: text('number', '1'),
    titleColor: color('titleColor'),
    textColor: color('textColor'),
    numberColor: color('numberColor'),
    numberOpacity: number('numberOpacity'),
  });

export const wrapStory = contentWrap;
