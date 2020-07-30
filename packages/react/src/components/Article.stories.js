import React from 'react';
import { Footer } from '@wingscms/components';
import { AppMenu, Article } from '@wingscms/react';
import richMd from '../../fixtures/mobiledocRich.json';
import { image } from '../../../../utils';

const menuProps = {
  menu: {
    items: [
      { text: 'Sign Up', url: 'https://wings.dev', primary: true },
      { text: 'Second Primary', url: 'https://wings.dev', primary: true },
      { text: 'An Example Item', url: 'https://wings.dev' },
      { text: 'An Example Item', url: 'https://wings.dev' },
      { text: 'An Example Item', url: 'https://wings.dev' },
    ],
  },
  logo: {
    url: image(320, 100),
    alt: '',
  },
  socialButtons: [
    {
      platform: 'facebook',
      url: 'https://wings.dev',
    },
    {
      platform: 'twitter',
      url: 'https://wings.dev',
    },
    {
      platform: 'whatsapp',
      url: 'https://wings.dev',
    },
    {
      platform: 'email',
      url: 'https://wings.dev',
    },
  ],
  translations: {
    current: 'en',
    translations: [
      {
        id: 'de',
        name: 'Deutsch',
        url: 'https://wings.dev',
      },
      {
        id: 'en',
        name: 'English',
        url: 'https://wings.dev',
      },
      {
        id: 'jp',
        name: '日本語',
        url: 'https://wings.dev',
      },
      {
        id: 'nl',
        name: 'Nederlands',
        url: 'https://wings.dev',
      },
      {
        id: 'ru',
        name: 'русский язык',
        url: 'https://wings.dev',
      },
      {
        id: 'zh',
        name: '中文',
        url: 'https://wings.dev',
      },
    ],
  },
};

const footerProps = {
  columns: [
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
  ],
};

const node = {
  title: 'This is a test article',
  image: {
    url: image(800, 600),
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

const Default = () => <Article node={node} />;

export default Default;
export const NoImage = () => <Article node={{ ...node, image: null }} />;
export const WithMenuAndFooter = () => (
  <>
    <AppMenu {...menuProps} />
    <Article node={node} />
    <Footer {...footerProps} />
  </>
);

Default.snapshotDelay = 1;
NoImage.snapshotDelay = 1;
