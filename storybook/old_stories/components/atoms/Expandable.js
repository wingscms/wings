import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import styled from '../lib/styled';
import { Expandable } from '../../../../packages/crane/src/components/atoms';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`;

export const ExpandableInfo = `
  documentation...
`;

export const ExpandableStory = () => (
  <Wrapper>
    <Expandable
      expandable={boolean('expandable', true)}
      height={text('height', '250px')}
      openText={text('open text', 'More')}
      closeText={text('close text', 'Less')}
      backgroundColor={text('background color (rgb)', '255, 255, 255')}
      borderRadius={text('border radius', '4')}
      shadow={boolean('shadow', true)}
      toggleColor={text('toggle text color', '#000000')}
      toggleHoverColor={text('toggle text hover color', '#4856C9')}
    >
      {text(
        'example content',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      )}
    </Expandable>
  </Wrapper>
);
