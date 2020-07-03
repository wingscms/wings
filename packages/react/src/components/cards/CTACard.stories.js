import { CTACard } from '@wingscms/react';
import { CallToAction } from '@wingscms/components';
import { contentWrap, image } from '../../../../../utils';

const props = ({
  backgroundImage = null,
  spacing = CallToAction.Spacing.SMALL,
  align = CallToAction.Align.LEFT,
  type = CallToAction.Type.VERTICAL,
} = {}) => ({
  align,
  spacing,
  type,
  backgroundImage,
  buttonText: 'Sign up now',
  buttonUrl: 'http://example.com',
  reveal: true,
  text: 'This is an introduction to the first section of the article',
  title: 'Section One',
});

export default () => CTACard.render(props());

export const BackgroundImage = () => CTACard.render(props({ backgroundImage: image() }));

export const Spacing = () =>
  CTACard.render(
    props({
      backgroundImage: image(),
      align: CallToAction.Align.RIGHT,
      spacing: CallToAction.Spacing.LARGE,
    }),
  );

export const Horizontal = () =>
  CTACard.render(
    props({
      backgroundImage: image(),
      align: CallToAction.Align.CENTER,
      spacing: CallToAction.Spacing.MEDIUM,
      type: CallToAction.Type.HORIZONTAL,
    }),
  );

export const wrapStory = contentWrap;
