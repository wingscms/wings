import React from 'react';
import { text, number } from '@storybook/addon-knobs/react';
import { Blockquote } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <Blockquote
    elevation={number('elevation', 1, { range: true, min: 0, max: 5 })}
    text={text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    )}
    source={text('source', 'Source')}
    sourceUrl={text('sourceUrl', 'http://example.com')}
  />
);

export const wrapStory = paddingWrap;
