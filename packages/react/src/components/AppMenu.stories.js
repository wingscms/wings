import React from 'react';
import { AppMenu } from '@wingscms/react';
import menuProps from '../../fixtures/menuProps';
import { backgroundWrap } from '../../../../utils';

export default () => <AppMenu {...menuProps} />;

export const wrapStory = backgroundWrap;
