import React from 'react';
import faker from 'faker';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { CallToAction } from '@wingscms/components';
import { paddingWrap, image } from '../../../../utils';

const props = ({
  backgroundImage = null,
  spacing = CallToAction.Spacing.SMALL,
  align = CallToAction.Align.LEFT,
  type = CallToAction.Type.VERTICAL,
} = {}) => ({
  align: select('align', CallToAction.Align, align),
  spacing: select('spacing', CallToAction.Spacing, spacing),
  type: select('type', CallToAction.Type, type),
  backgroundImage: text('backgroundImage', backgroundImage),
  buttonText: text('buttonText', 'Sign up now'),
  buttonUrl: text('buttonUrl', 'http://example.com'),
  reveal: boolean('reveal', true),
  text: text('text', faker.lorem.paragraph()),
  title: text('title', 'Sign Up Now'),
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
      type: CallToAction.Type.HORIZONTAL,
    })}
  />
);

export const wrapStory = paddingWrap;
