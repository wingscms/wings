import React from 'react';
import { color, object } from '@storybook/addon-knobs';
import { Footer } from '@wingscms/react';

import columns from '../../fixtures/footerContent.json';

export default () => (
  <Footer
    backgroundColor={color('backgroundColor', '')}
    color={color('color', '')}
    columns={object('columns', columns)}
  />
);
