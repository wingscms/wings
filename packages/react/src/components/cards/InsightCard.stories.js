import { InsightCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  InsightCard.render({
    text: 'This is some example text inside of an insight.',
  });

export const wrapStory = contentWrap;
