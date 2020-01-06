import React from 'react';
import styled from '../lib/styled';
import { number, text } from '@storybook/addon-knobs/react';
import { OrderedList } from '../../../src/components/text';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  line-height: 1.4;
`;
export const OrderedListInfo = `
  documentation...
`;

export const OrderedListStory = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <OrderedList
      bulletColor={text('bullet color', '#4856C9')}
      bulletFontFamily={text('bullet font family', 'inherit')}
      bulletFontSize={text('bullet font size', 'bold')}
      bulletLeft={number('bullet left', 0)}
      bulletSize={number('bullet size', 16)}
      bulletTop={number('bullet top', 3)}
      itemMargin={text('item margin', 'initial')}
      itemPadding={text('item padding', '0 0 0 30px')}
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
    </OrderedList>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
);
