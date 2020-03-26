import React from 'react';
import { boolean, select, text, number } from '@storybook/addon-knobs/react';
import styled from '../lib/styled';
import { Image } from '..';

import jellyfish from '../img/story/jellyfish.jpg';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  padding: 10px;
  background-color: #eee;
`;

export default () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Image
      url={text('url', jellyfish)}
      type={select(
        'type',
        {
          default: 'default',
          large: 'large',
          half: 'half',
          screenWidth: 'screenWidth',
          offGridWider: 'offGridWider',
          left: 'left',
          right: 'right',
          offGridLeft: 'offGridLeft',
          offGridRight: 'offGridRight',
        },
        'default',
      )}
      caption={text('caption', '')}
      author={text('author', '')}
      copyright={text('copyright', '')}
      captionColor={text('caption color', '#000')}
      shadow={boolean('shadow', true)}
      borderRadius={number('border radius', 4)}
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
);
