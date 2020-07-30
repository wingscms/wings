import React from 'react';
import fP from 'filter-invalid-dom-props';

import { Dialog } from '@wingscms/components';

export default function LanguageSelectionDialog({ onClose, ...props }) {
  return (
    <Dialog size={Dialog.Size.MEDIUM} onClose={onClose} overlay {...fP(props)}>
      <Dialog.Header title="Select Language" onClose={onClose} />
      Language Select
    </Dialog>
  );
}
