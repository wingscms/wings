import { InsightCard } from '@wingscms/react';
import { text } from '@storybook/addon-knobs/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  InsightCard.render({
    text: text('text', 'This is some example text inside of an insight.'),
  });

export const storyWrap = contentWrap;
