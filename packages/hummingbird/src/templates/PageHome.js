import React from 'react';
import { PageTemplate } from '@wingscms/hummingbird';

export default props => (
  <PageTemplate {...props}>
    <PageTemplate.Navigation />
    <PageTemplate.Title />
    <PageTemplate.Main />
  </PageTemplate>
);
