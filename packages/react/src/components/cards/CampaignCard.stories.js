import { CampaignCard } from '@wingscms/react';
import { contentWrap } from '../../../../../.storybook/utils';

export default () =>
  CampaignCard.render({
    id: 'KN7YlWlxkPCkW9V879jg',
    resourceType: 'node.petition',
  });

export const wrapStory = contentWrap;
