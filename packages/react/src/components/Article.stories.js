import React from 'react';
import { Footer } from '@wingscms/components';
import { AppMenu, Article } from '@wingscms/react';
import richMd from '../../fixtures/mobiledocRich.json';
import menuProps from '../../fixtures/menuProps';
import footerProps from '../../fixtures/footerProps';
import { image } from '../../../../utils';

const node = {
  title: 'This is a test article',
  image: {
    url: image(800, 600),
    caption: 'A test image',
  },
  content: JSON.stringify(richMd),
};

const Default = () => <Article node={node} />;

export default Default;
export const NoImage = () => <Article node={{ ...node, image: null }} />;
export const NoHeader = () => <Article showHeader={false} node={{ ...node, image: null }} />;
export const WithMenuAndFooter = () => (
  <>
    <AppMenu {...menuProps} />
    <Article node={node} />
    <Footer {...footerProps} />
  </>
);

Default.snapshotDelay = 1;
NoImage.snapshotDelay = 1;
