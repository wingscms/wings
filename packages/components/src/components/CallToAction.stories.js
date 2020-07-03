import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { CallToAction } from '@wingscms/components';
import { paddingWrap, image } from '../../../../utils';

const props = ({
  backgroundImage = null,
  spacing = CallToAction.Spacing.SMALL,
  align = CallToAction.Align.LEFT,
  plane = CallToAction.Plane.VERTICAL,
} = {}) => ({
  align: select('align', CallToAction.Align, align),
  spacing: select('spacing', CallToAction.Spacing, spacing),
  plane: select('plane', CallToAction.Plane, plane),
  backgroundImage: text('backgroundImage', backgroundImage),
  buttonText: text('buttonText', 'Sign up now'),
  buttonUrl: text('buttonUrl', 'http://example.com'),
  reveal: boolean('reveal', true),
  text: text('text', 'This is an introduction to the first section of the article'),
  title: text('title', 'Section One'),
});

export default () => <CallToAction {...props()} />;

export const BackgroundImage = () => <CallToAction {...props({ backgroundImage: image() })} />;

export const LargeSpacing = () => (
  <CallToAction
    {...props({
      spacing: CallToAction.Spacing.LARGE,
      backgroundImage: image(),
      align: CallToAction.Align.RIGHT,
    })}
  />
);

export const Horizontal = () => (
  <CallToAction
    {...props({
      spacing: CallToAction.Spacing.MEDIUM,
      backgroundImage: image(),
      plane: CallToAction.Plane.HORIZONTAL,
    })}
  />
);

export const wrapStory = paddingWrap;
