import React from 'react';
import { Page } from '@wingscms/hummingbird';

export default props => (
  <Page {...props}>
    <Page.Navigation />
    <Page.Title />
    <Page.Main />
  </Page>
);
