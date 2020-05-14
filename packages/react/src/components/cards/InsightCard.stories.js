import { InsightCard } from '@wingscms/react';
import { text } from '@storybook/addon-knobs/react';

export default () =>
  InsightCard.render({
    text: text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    ),
  });
