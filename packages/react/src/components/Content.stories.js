import React from 'react';
import { Content } from '@wingscms/react';
import mobiledocRich from '../../fixtures/mobiledocRich';
import mobiledocBasic from '../../fixtures/mobiledocBasic';

const Default = () => <Content content={JSON.stringify(mobiledocBasic)} />;

export default Default;
export const WithCards = () => <Content content={JSON.stringify(mobiledocRich)} />;

Default.snapshotDelay = 1;
WithCards.snapshotDelay = 1;
