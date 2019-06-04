import React from 'react';
import styled from 'styled-components';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Image } from '../../../src/components/images';

import coffeeshop from '../../img/coffeeshop.jpg';
import field from '../../img/field.jpg';
import jellyfish from '../../img/jellyfish.jpg';
import street from '../../img/street.jpg';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  padding: 10px;
  border-right: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
`;

export const ImageInfo = `
  documentation...
`;

export const ImageStory = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Image
      url={select(
        'image',
        {
          [coffeeshop]: 'coffeeshop',
          [field]: 'field',
          [jellyfish]: 'jellyfish',
          [street]: 'street',
        },
        coffeeshop,
      )}
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
      borderRadius={text('border radius', '4')}
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
