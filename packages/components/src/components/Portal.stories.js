import React from 'react';
import { boolean } from '@storybook/addon-knobs/react';
import { Portal } from '@wingscms/components';
import { paddingWrap } from '../../../../utils';

export default () => (
  <div>
    some text
    {boolean('portal open') ? (
      <Portal>
        <div>hello</div>
      </Portal>
    ) : null}
  </div>
);

export const wrapStory = paddingWrap;
