import React from 'react';
import styled from 'styled-components';
import { Icon } from '@wingscms/components';
import { select } from '@storybook/addon-knobs/react';
import { paddingWrap } from '../../../../utils';

const Wrapper = styled.div`
  max-width: 100px;
  max-height: 100px;
  svg {
    path {
      fill: #000;
    }
  }
`;

const DEFAULT_ICON = 'facebook';

export default () => (
  <Wrapper>
    <Icon icon={select('icon', Icon.ICON_NAMES, DEFAULT_ICON)} />
  </Wrapper>
);

export const wrapStory = paddingWrap;
