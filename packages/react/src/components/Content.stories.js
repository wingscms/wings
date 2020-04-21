import React from 'react';
import { Content } from '@wingscms/react';
import mobiledocRich from '../../fixtures/mobiledocRich';
import mobiledocBasic from '../../fixtures/mobiledocBasic';

export default () => <Content content={JSON.stringify(mobiledocBasic)} />;
export const WithCards = () => <Content content={JSON.stringify(mobiledocRich)} />;

WithCards.snapshotDelay = 1;
