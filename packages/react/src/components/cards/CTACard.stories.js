import { CTACard } from '@wingscms/react';
import { text } from '@storybook/addon-knobs/react';

export default () =>
  CTACard.render({
    title: text('title', 'Sign Up'),
    text: text('text', 'Sign up to our campaign or something.'),
    actionText: text('actionText', 'Do It!'),
    actionUrl: text('actionUrl', 'http://example.com'),
  });
