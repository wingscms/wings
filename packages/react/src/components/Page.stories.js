import React from 'react';
import Page from './Page';

const node = {
  content:
    '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Some Page"]]]]}',
};

export default () => <Page node={node} />;
