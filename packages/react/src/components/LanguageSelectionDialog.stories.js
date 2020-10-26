import React from 'react';
import { LanguageSelectionDialog } from '@wingscms/react';
import translations from '../../fixtures/translations';

export default () => (
  <LanguageSelectionDialog current="en" translations={translations} onClose={() => {}} />
);
