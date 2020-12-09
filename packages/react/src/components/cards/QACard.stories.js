import { QACard } from '@wingscms/react';
import faker from 'faker';
import { contentWrap, mobiledocWithText } from '../../../../../utils';

export default () =>
  QACard.render({
    title: 'Question and Answers',
    intro: faker.lorem.paragraphs(1),
    content: [
      {
        question: faker.lorem.sentence(),
        answer: faker.lorem.paragraphs(3),
      },
      {
        question: faker.lorem.sentence(),
        answer: faker.lorem.paragraphs(3),
      },
      {
        question: faker.lorem.sentence(),
        answer: faker.lorem.paragraphs(3),
      },
    ],
  });

export const WithMobiledoc = () =>
  QACard.render({
    title: 'Question and Answers',
    intro: faker.lorem.paragraphs(1),
    content: [
      {
        question: mobiledocWithText('Question'),
        answer: mobiledocWithText(faker.lorem.paragraphs(3)),
      },
      {
        question: mobiledocWithText('Question'),
        answer: mobiledocWithText(faker.lorem.paragraphs(3)),
      },
      {
        question: mobiledocWithText('Question'),
        answer: mobiledocWithText(faker.lorem.paragraphs(3)),
      },
    ],
  });

export const wrapStory = contentWrap;
