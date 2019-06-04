import React from 'react';
import styled from 'styled-components';
import { number, select, text } from '@storybook/addon-knobs/react';
import { UnorderedList } from '../../../src/components/text';
import parrot from '../../img/parrot.gif';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  line-height: 1.4;
`;
export const UnorderedListInfo = `
  documentation...
`;

export const UnorderedListStory = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <UnorderedList
      bulletImage={parrot}
      bulletCharacter={text('bullet unicode character/text', '\u2713')}
      bulletColor={text('bullet color', '#4856C9')}
      bulletColorInner={text('bullet color inner', '#ffffff')}
      bulletLeft={number('bullet left', 0)}
      bulletSize={number('bullet size', 8)}
      bulletTop={number('bullet top', 5)}
      itemMargin={text('item margin', 'initial')}
      itemPadding={text('item padding', '0 0 0 30px')}
      type={select(
        'type',
        {
          disc: 'disc',
          discHollow: 'discHollow',
          square: 'square',
          squareHollow: 'squareHollow',
          diamond: 'diamond',
          diamondHollow: 'diamondHollow',
          chevron: 'chevron',
          triangle: 'triangle',
          triangleHollow: 'triangleHollow',
          image: 'image',
          unicode: 'unicode',
        },
        'disc',
      )}
      margin={text('margin', 'initial')}
      padding={text('padding', 'initial')}
    >
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </li>
      <li>Duis aute irure dolor in reprehenderit.</li>
      <li>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </li>
      <li> Lorem ipsum dolor sit amet.</li>
    </UnorderedList>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
);
