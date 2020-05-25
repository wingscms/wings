import React from 'react';
import { text, select } from '@storybook/addon-knobs/react';
import { Pullquote, Text } from '@wingscms/components';
import faker from 'faker';
import { contentWrap } from '../../../../utils';

export default () => (
  <>
    <Pullquote
      text={text(
        'text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      )}
      source={text('source', 'Source')}
      sourceUrl={text('sourceUrl', 'http://example.com')}
      align={select('align', Pullquote.Align, Pullquote.Align.LEFT)}
    />
    <Text>{faker.lorem.paragraphs(10)}</Text>
  </>
);

export const wrapStory = contentWrap;
