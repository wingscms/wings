import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { CallToAction } from '@wingscms/components';
import { paddingWrap, image } from '../../../../utils';

const props = ({ backgroundImage = null } = {}) => ({
  align: select('align', CallToAction.Align, CallToAction.Align.LEFT),
  backgroundImage: text('backgroundImage', backgroundImage),
  buttonText: text('buttonText', 'Sign up now'),
  buttonUrl: text('buttonUrl', 'http://example.com'),
  reveal: boolean('reveal', true),
  text: text('text', 'This is an introduction to the first section of the article'),
  title: text('title', 'Section One'),
});

export default () => <CallToAction {...props()} />;

export const BackgroundImage = () => <CallToAction {...props({ backgroundImage: image() })} />;

export const wrapStory = paddingWrap;
