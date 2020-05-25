import faker from 'faker';
import { TestimonialCard } from '@wingscms/react';
import { image, contentWrap, mobiledocWithText } from '../../../../../utils';

export default () =>
  TestimonialCard.render({
    title: faker.company.catchPhrase(),
    intro: faker.lorem.sentence(),
    content: mobiledocWithText(faker.lorem.paragraphs(50)),
    url: image(),
  });

export const wrapStory = contentWrap;
