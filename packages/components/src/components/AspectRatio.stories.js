import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { AspectRatio, Surface as _Surface } from '@wingscms/components';

import styled from '../lib/styled';
import { paddingWrap } from '../../../../utils';

const Surface = styled(_Surface)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const props = () => ({
  ratio: text('ratio', '16:9'),
});

export default () => (
  <AspectRatio style={{ width: text('width', '300px') }} {...props()}>
    <Surface elevation={2} />
  </AspectRatio>
);

export const wrapStory = paddingWrap;
