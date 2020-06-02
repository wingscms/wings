import { CollectionCard } from '@wingscms/react';
import faker from 'faker';
import { contentWrap, image } from '../../../../../utils';

export const People = () =>
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

export const Organisations = () =>
  CollectionCard.render({
    type: 1,
    title: 'Organisations',
    items: [
      {
        name: 'Wings',
        profiles: {
          website: {
            url: 'https://wings.dev',
          },
          twitter: {
            username: 'wingscms',
          },
          instagram: {
            username: 'wingscms',
          },
          linkedIn: {
            url: 'https://www.linkedin.com/company/wingscms',
          },
          facebook: {
            url: 'https://www.facebook.com/wingscms',
          },
        },
        description: {
          text: faker.lorem.paragraphs(1),
        },
        image: {
          url: image(),
        },
      },
      {
        name: 'Wings',
        profiles: {
          website: {
            url: 'https://wings.dev',
          },
          twitter: {
            username: 'wingscms',
          },
          instagram: {
            username: 'wingscms',
          },
          linkedIn: {
            url: 'https://www.linkedin.com/company/wingscms',
          },
          facebook: {
            url: 'https://www.facebook.com/wingscms',
          },
        },
        description: {
          text: faker.lorem.paragraphs(1),
        },
        image: {
          url: image(),
        },
      },
      {
        name: 'Wings',
        profiles: {
          website: {
            url: 'https://wings.dev',
          },
          twitter: {
            username: 'wingscms',
          },
          instagram: {
            username: 'wingscms',
          },
          linkedIn: {
            url: 'https://www.linkedin.com/company/wingscms',
          },
          facebook: {
            url: 'https://www.facebook.com/wingscms',
          },
        },
        description: {
          text: faker.lorem.paragraphs(1),
        },
        image: {
          url: image(),
        },
      },
      {
        name: 'Wings',
        profiles: {
          website: {
            url: 'https://wings.dev',
          },
          twitter: {
            username: 'wingscms',
          },
          instagram: {
            username: 'wingscms',
          },
          linkedIn: {
            url: 'https://www.linkedin.com/company/wingscms',
          },
          facebook: {
            url: 'https://www.facebook.com/wingscms',
          },
        },
        description: {
          text: faker.lorem.paragraphs(1),
        },
        image: {
          url: image(),
        },
      },
    ],
  });

export const wrapStory = contentWrap;
