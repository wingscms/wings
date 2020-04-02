import React from 'react';
import styled from 'styled-components';
import { text, select } from '@storybook/addon-knobs/react';
import { image } from '../../../../utils';
import Header from './Header';

const StoryWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const props = ({ type = Header.Type.SIMPLE } = {}) => ({
  type: select('type', Header.Type, type),
  title: text('title', 'Test title'),
  imageUrl: text('url', image(1200, 800)),
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
