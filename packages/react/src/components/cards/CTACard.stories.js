import { CTACard } from '@wingscms/react';
import { CallToAction } from '@wingscms/components';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { image } from '../../../../../utils';

const props = ({ backgroundImage = null } = {}) => ({
  align: select('align', CallToAction.Align, CallToAction.Align.LEFT),
  backgroundImage: text('backgroundImage', backgroundImage),
  buttonText: text('buttonText', 'Sign up now'),
  buttonUrl: text('buttonUrl', 'http://example.com'),
  fade: boolean('fade', true),
  text: text('text', 'This is an introduction to the first section of the article'),
  title: text('title', 'Section One'),
});

export default () => CTACard.render(props());

export const BackgroundImage = () => CTACard.render(props({ backgroundImage: image() }));
