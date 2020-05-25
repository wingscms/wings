import faker from 'faker';
import { TextCard } from '@wingscms/react';
import { contentWrap, mobiledocWithText } from '../../../../../utils';

export default () =>
  TextCard.render({
    content: mobiledocWithText(faker.lorem.paragraphs()),
  });

export const wrapStory = contentWrap;
