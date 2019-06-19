import React from 'react';
import styled from 'styled-components';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { Blockquote } from '../../../src/components/text';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  line-height: 1.4;
`;
export const BlockquoteInfo = `
  documentation...
`;

export const BlockquoteStory = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Blockquote
      attribution={text('attribution', 'Namey McNameface')}
      backgroundColor={text('background color', '#fff')}
      borderColor={text('border color', '#4856C9')}
      borderStyle={text('border style', 'none none none solid')}
      borderWidth={text('border width', '5px')}
      fontWeight={text('font-weight', 'inherit')}
      hasDecoration={boolean('show icon', false)}
      lineHeight={text('line-height', 'inherit')}
      margin={text('margin', '0')}
      padding={text('padding', '0 0 0 1rem')}
      shadow={text('shadow', 'none')}
      textAlign={select(
        'text-align',
        {
          left: 'left',
          right: 'right',
          center: 'center',
          justify: 'justify',
          'justify-all': 'justify-all',
          start: 'start',
          end: 'end',
          'match-parent': 'match-parent',
          inherit: 'inherit',
          initial: 'initial',
          unset: 'unset',
        },
        'inherit',
      )}
      textColor={text('text color', 'inherit')}
      textSize={text('text size', 'inherit')}
      wrapperMargin={text('wrapper margin', '1rem 0 1rem calc(calc(1rem + 5px) * -1)')}
      wrapperPadding={text('wrapper padding', '0')}
      attributionPadding={text('attribution padding', '.5rem 0 0 calc(1rem + 5px)')}
    >
      <p>
        {text(
          'example content',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.',
        )}
      </p>
    </Blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
);
