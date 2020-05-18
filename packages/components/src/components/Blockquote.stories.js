import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { Blockquote } from '@wingscms/components';
import { paddingWrap } from '../../../../.storybook/utils';

export default () => (
  <Blockquote
    text={text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    )}
    source={text('source', 'Source')}
    sourceUrl={text('sourceUrl', 'http://example.com')}
  />
);

export const wrapStory = paddingWrap;
