import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import Header from './Header';

export default () => (
  <Header
    title={text('title', 'Test title')}
    image={{
      url: text(
        'url',
        'https://files.wings.dev/1530796123797/space-travel-1784461640.png',
        'image',
      ),
      caption: text('caption', 'A test caption', 'image'),
    }}
  />
);
