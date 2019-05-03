import React from 'react';
import styled from 'styled-components';
import { text, select } from '@storybook/addon-knobs/react';
import { HighlightedQuote } from '../../src/components/text';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`;
export const HighlightedQuoteInfo = `
  documentation...
`;

export const HighlightedQuoteStory = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <HighlightedQuote
      attribution={text('attribution', '')}
      backgroundColor={text('background color', '#fff')}
      borderColor={text('border color', 'transparent')}
      borderStyle={text('border style', 'none')}
      borderWidth={text('border width', '0')}
      float={select(
        'float',
        {
          none: 'Do not float',
          left: 'Float left',
          right: 'Float right',
          'inline-start': 'Inline start',
          'inline-end': 'Inline end',
          inherit: 'inherit',
          initial: 'initial',
          unset: 'unset',
        },
        'none',
      )}
      fontWeight={text('font-weight', 'bolder')}
      lineHeight={text('line-height', '1')}
      maxWidth={text('max-width', 'none')}
      margin={text('margin', '0')}
      padding={text('padding', '0')}
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
        'center',
      )}
      textColor={text('text color', '#4856C9')}
      textSize={text('font-size', '3rem')}
      wrapperMargin={text('wrapper margin', '3rem 0')}
      wrapperPadding={text('wrapper padding', '0')}
    >
      <p>
        {text(
          'example content',
          'The cranes have a cosmopolitan distribution, occurring across most of the world’s continents',
        )}
      </p>
    </HighlightedQuote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Wrapper>
);
