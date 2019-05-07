import React from 'react';
import Page from './components/Page';

export default props => (
  <Page {...props}>
    <Page.Navigation />
    <Page.Title />
    <Page.Main />
    <Page.HighlightedContent />
  </Page>
);
