import React from 'react';
import { text, select } from '@storybook/addon-knobs/react';
import Header, { HEADER_TYPE } from '.';

export default () => (
  <Header
    intent={select('intent', HEADER_TYPE)}
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
