import { InsightCard } from '@wingscms/react';
import { text } from '@storybook/addon-knobs/react';

export default () =>
  InsightCard.render({
    text: text('text', 'This is some example text inside of an insight.'),
  });
