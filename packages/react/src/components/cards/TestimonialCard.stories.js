import faker from 'faker';
import { TestimonialCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export default () => {
  faker.seed(1);
  return TestimonialCard.render({
    type: 1,
    title: 'A testimonial',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,${JSON.stringify(
      faker.lorem.paragraphs(50),
    )}]]]]}`,
    url: 'https://files.wings.dev/1530796123797/space-travel-1784461640.png',
  });
};

export const wrapStory = contentWrap;
