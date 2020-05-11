import React from 'react';
import { object } from '@storybook/addon-knobs';
import faker from 'faker';
import { Footer } from '@wingscms/components';

import { image } from '../../../../utils';

const columns = [
  {
    title: 'Wings',
    rows: [
      {
        type: 'image',
        src: image(320, 100),
        alt: 'Wings',
        url: 'https://wings.dev',
      },
    ],
  },
  {
    title: 'Contact',
    rows: [
      {
        title: 'Address',
        type: 'text',
        content: `
        67 Blahblah
        Some City
        Somewhere
        `,
      },
      {
        title: 'Email',
        type: 'link',
        url: 'mailto:info@wings.dev',
        content: 'info@wings.dev',
      },
    ],
  },
  {
    title: 'Social',
    rows: [
      {
        type: 'social',
        profiles: [
          {
            platform: 'twitter',
            url: 'https://twitter.com/wingscms',
          },
          {
            platform: 'facebook',
            url: 'https://example.com',
          },
          {
            platform: 'instagram',
            url: 'https://example.com',
          },
          {
            platform: 'linkedin',
            url: 'https://example.com',
          },
        ],
      },
    ],
  },
  {
    title: 'Text',
    rows: [
      {
        type: 'text',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
    ],
  },
  {
    title: 'Button',
    rows: [
      {
        type: 'button',
        content: 'A button',
        url: 'https://example.com',
      },
    ],
  },
];

export default () => <Footer columns={object('columns', columns)} />;

export const CustomContent = () => {
  faker.seed(1);
  return (
    <Footer columns={object('columns', columns)}>
      <div>{faker.lorem.paragraph()}</div>
    </Footer>
  );
};
