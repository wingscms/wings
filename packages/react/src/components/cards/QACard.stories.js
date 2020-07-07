import { QACard } from '@wingscms/react';
import faker from 'faker';
import { contentWrap } from '../../../../../utils';

export const WithStrings = () =>
  QACard.render({
    type: 2,
    title: 'Question and Answers',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    type: 2,
    title: 'Question and Answers',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      {
        question:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"h2",[[0,[],0,"Question"]]]]}',
        answer:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
      },
      {
        question:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"h2",[[0,[],0,"Question"]]]]}',
        answer:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
      },
      {
        question:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"h2",[[0,[],0,"Question"]]]]}',
        answer:
          '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]]]}',
      },
    ],
  });

export const wrapStory = contentWrap;
