import React from 'react';
import { Page } from '@wingscms/hummingbird';

export default props => (
  <Page {...props}>
    <Page.SimpleTitle />
    <Page.Main />
    <Page.HighlightedContent />
  </Page>
);
