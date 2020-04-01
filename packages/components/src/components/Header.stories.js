import React from 'react';
import styled from 'styled-components';
import { text, select } from '@storybook/addon-knobs/react';
import Header from './Header';

const StoryWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const props = ({ type = Header.Type.SIMPLE } = {}) => ({
  type: select('type', Header.Type, type),
  title: text('title', 'Test title'),
  imageUrl: text('url', 'https://files.wings.dev/1530796123797/space-travel-1784461640.png'),
  caption: text('caption', 'A test caption'),
});

export default () => (
  <StoryWrap>
    <Header {...props()} />
  </StoryWrap>
);
export const Cover = () => (
  <StoryWrap>
    <Header {...props({ type: Header.Type.COVER })} />
  </StoryWrap>
);
