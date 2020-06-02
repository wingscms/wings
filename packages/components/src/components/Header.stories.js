import React from 'react';
import styled from 'styled-components';

import { Header } from '@wingscms/components';
import { text, select } from '@storybook/addon-knobs/react';
import { image } from '../../../../utils';

const StoryWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const props = ({ type = Header.Type.SIMPLE } = {}) => ({
  type: select('type', Header.Type, type),
  headerTitle: text('headerTitle', 'Test title'),
  headerSubtitle: text('headerSubtitle', 'Test subtitle'),
  imageUrl: text('url', image(1200, 800)),
  caption: text('caption', 'A test caption'),
});

export default () => <Header {...props()} />;

export const Cover = () => <Header {...props({ type: Header.Type.COVER })} />;

export const wrapStory = elem => <StoryWrap>{elem}</StoryWrap>;
