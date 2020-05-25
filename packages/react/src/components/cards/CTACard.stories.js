import { CTACard } from '@wingscms/react';
import { contentWrap, image } from '../../../../../utils';

const props = ({ backgroundImage = null } = {}) => ({
  backgroundImage,
  buttonText: 'Sign up now',
  buttonUrl: 'http://example.com',
  text: 'This is an introduction to the first section of the article',
  title: 'Section One',
});

export default () => CTACard.render(props());

export const BackgroundImage = () => CTACard.render(props({ backgroundImage: image() }));

export const wrapStory = contentWrap;
