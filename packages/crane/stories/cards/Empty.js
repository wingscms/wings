import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs/react';
import { EmptyCard } from '../../src/components/cards';
import FlexGrid from '../../src/layout/FlexGrid';

export const EmptyCardInfo = `
  documentation...
`;

export const EmptyCardStory = () => (
  <FlexGrid
    divisions={boolean('large', false) ? 1 : number('grid', 3)}
    margins={5}
    alignItems="stretch"
    style={{
      marginTop: '5px',
      marginBottom: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 'calc(100% - 10px)',
      maxWidth: '1200px',
    }}
  >
    <EmptyCard
      borderRadius={text('border radius', '4')}
      maintainRatio={boolean('maintain ratio', true)}
      size={boolean('large', false) ? 'large' : 'medium'}
      shadow={boolean('shadow', true)}
    />
    {Array(number('grid', 3) - 1 || 0)
      .join('.')
      .split('.')
      .map(
        () =>
          (boolean('large', false) ? null : (
            <EmptyCard
              borderRadius={text('border radius', '4')}
              size="medium"
              shadow={boolean('shadow', true)}
              maintainRatio={boolean('maintain ratio', true)}
            />
          )),
      )}
  </FlexGrid>
);
