import { CollectionCard } from '@wingscms/react';
import { contentWrap, image } from '../../../../../utils';

export default () =>
  CollectionCard.render({
    type: 0,
    title: 'Collection',
    items: [
      {
        image: {
          url: image(),
        },
        name: 'Lorem Ipsum',
        profiles: {
          website: {
            url: 'example.com',
          },
          facebook: {
            url: 'example.com',
          },
          linkedIn: {
            url: 'example.com',
          },
          twitter: {
            username: 'example',
          },
          instagram: {
            username: 'example',
          },
        },
      },
      {
        name: 'Lorem Ipsum',
        image: {
          url: image(),
        },
        profiles: {
          website: {
            url: 'example.com',
          },
          facebook: {
            url: 'example.com',
          },
          linkedIn: {
            url: 'example.com',
          },
          twitter: {
            username: 'example',
          },
          instagram: {
            username: 'example',
          },
        },
      },
      {
        image: {
          url: image(),
        },
        name: 'Lorem Ipsum',
        profiles: {
          website: {
            url: 'example.com',
          },
          facebook: {
            url: 'example.com',
          },
          linkedIn: {
            url: 'example.com',
          },
          twitter: {
            username: 'example',
          },
          instagram: {
            username: 'example',
          },
        },
      },
      {
        name: 'Lorem Ipsum',
        image: {
          url: image(),
        },
        profiles: {
          website: {
            url: 'example.com',
          },
          facebook: {
            url: 'example.com',
          },
          linkedIn: {
            url: 'example.com',
          },
          twitter: {
            username: 'example',
          },
          instagram: {
            username: 'example',
          },
        },
      },
    ],
  });

export const storyWrap = contentWrap;
