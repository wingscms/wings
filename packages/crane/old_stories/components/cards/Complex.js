import React from 'react';
import { text, select, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { ComplexCard } from '../../../src/components/cards';
import coffeeshop from '../../img/coffeeshop.jpg';
import field from '../../img/field.jpg';
import jellyfish from '../../img/jellyfish.jpg';
import street from '../../img/street.jpg';
import FlexGrid from '../../../src/layout/FlexGrid';

export const ComplexCardInfo = `
  documentation...
`;

export const ComplexCardStory = () => (
  <FlexGrid
    divisions={boolean('large', false) ? 1 : 3}
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
    <ComplexCard
      title={text('title', 'This is a complex card')}
      image={select(
        'image',
        {
          [coffeeshop]: 'coffeeshop',
          [field]: 'field',
          [jellyfish]: 'jellyfish',
          [street]: 'street',
        },
        coffeeshop,
      )}
      summary={text(
        'summary',
        'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      )}
      ctaText={text('ctaText', '')}
      author={text('author', 'Mark Jackson')}
      commentCount={text('comment count', '2')}
      signatureCount={number('signature count', 0)}
      signatureMax={number('signature max', 0)}
      startDate={boolean('start date', false) ? '2018-09-29T18:20:47+00:00' : null}
      publishDate={boolean('publish date', true) ? '2018-09-10' : null}
      location={boolean('location', false) ? { name: 'Bolster HQ' } : null}
      size={boolean('large', false) ? 'large' : 'medium'}
      shadow={boolean('shadow', true)}
      borderRadius={text('border radius', '4')}
      bottomBackground={boolean('bottom background', false)}
      topBackground={boolean('top background', false)}
      onClickHandler={() => {
        action('clicked!');
      }}
    />
    {boolean('large', false) ? null : (
      <ComplexCard
        title={text('title', 'This is a complex card')}
        image={select(
          'image',
          {
            [coffeeshop]: 'coffeeshop',
            [field]: 'field',
            [jellyfish]: 'jellyfish',
            [street]: 'street',
          },
          coffeeshop,
        )}
        summary={text(
          'summary',
          'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        )}
        ctaText={text('ctaText', '')}
        author={text('author', 'Mark Jackson')}
        commentCount={text('comment count', '2')}
        signatureCount={text('signature count', '')}
        signatureMax={text('signature max', '')}
        startDate={boolean('start date', false) ? '2018-09-29T18:20:47+00:00' : null}
        publishDate={boolean('publish date', true) ? '2018-09-10' : null}
        location={boolean('location', false) ? { name: 'Bolster HQ' } : null}
        size="medium"
        shadow={boolean('shadow', true)}
        borderRadius={text('border radius', '4')}
        bottomBackground={boolean('bottom background', false)}
        topBackground={boolean('top background', false)}
        onClickHandler={() => {
          action('clicked!');
        }}
      />
    )}
    {boolean('large', false) ? null : (
      <ComplexCard
        title={text('title', 'This is a complex card')}
        image={select(
          'image',
          {
            [coffeeshop]: 'coffeeshop',
            [field]: 'field',
            [jellyfish]: 'jellyfish',
            [street]: 'street',
          },
          coffeeshop,
        )}
        summary={text(
          'summary',
          'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        )}
        ctaText={text('ctaText', '')}
        author={text('author', 'Mark Jackson')}
        commentCount={text('comment count', '2')}
        signatureCount={number('signature count', 0)}
        signatureMax={number('signature max', 0)}
        startDate={boolean('start date', false) ? '2018-09-29T18:20:47+00:00' : null}
        publishDate={boolean('publish date', true) ? '2018-09-10' : null}
        location={boolean('location', false) ? { name: 'Bolster HQ' } : null}
        size="medium"
        shadow={boolean('shadow', true)}
        borderRadius={text('border radius', '4')}
        bottomBackground={boolean('bottom background', false)}
        topBackground={boolean('top background', false)}
        onClickHandler={() => {
          action('clicked!');
        }}
      />
    )}
  </FlexGrid>
);
