import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Insight } from '@wingscms/components';

export default () => (
  <Insight fade={boolean('fade', true)}>
    {text('text', 'This is some example text inside of an insight.')}
  </Insight>
);
