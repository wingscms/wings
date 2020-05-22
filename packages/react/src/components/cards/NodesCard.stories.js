import { NodesCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

const Default = () => NodesCard.render({ payload: { items: ['', '', '', ''] } });
export default Default;

Default.snapshotDelay = 1;

export const wrapStory = contentWrap;
