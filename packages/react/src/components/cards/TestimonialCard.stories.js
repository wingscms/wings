import faker from 'faker';
import { TestimonialCard } from '@wingscms/react';
import { contentWrap, mobiledocWithText } from '../../../../../utils';

export default () =>
  TestimonialCard.render({
    type: 1,
    title: 'A testimonial',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: mobiledocWithText(faker.lorem.paragraphs(50)),
    url: 'https://files.wings.dev/1530796123797/space-travel-1784461640.png',
  });

export const wrapStory = contentWrap;
