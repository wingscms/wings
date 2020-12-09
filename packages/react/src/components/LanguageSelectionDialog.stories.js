import React from 'react';
import { LanguageSelectionDialog } from '@wingscms/react';
import translations from '../../fixtures/translations';
import { backgroundWrap } from '../../../../utils';

export default () => (
  <LanguageSelectionDialog current="en" translations={translations} onClose={() => {}} />
);

export const wrapStory = backgroundWrap;
