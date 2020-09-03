import React from 'react';
import fP from 'filter-invalid-dom-props';

import { Dialog, Text as _Text } from '@wingscms/components';
import LanguageSelect from './LanguageSelect';

import { t } from '../../theme';
import styled from '../../lib/styled';

const Text = styled(_Text)`
  color: ${t(_ => _.dialogTextColor)};
  margin: 0 ${t(_ => _.smallSpacing)};
`;

export default function LanguageSelectionDialog({
  onClose,
  title = 'Select Language',
  intro = 'Select your preferred language:',
  current,
  overlay,
  translations = [],
  wrapTranslation,
  ...props
}) {
  return (
    <Dialog
      size={Dialog.Size.MEDIUM}
      onClose={onClose}
      elevation={5}
      overlay={overlay}
      {...fP(props)}
    >
      <Dialog.Header title={title} onClose={onClose} />
      <Text>{intro}</Text>
      <LanguageSelect
        current={current}
        translations={translations}
        wrapTranslation={wrapTranslation}
      />
    </Dialog>
  );
}
