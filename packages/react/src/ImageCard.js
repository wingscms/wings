import createCard from './createCard';
import ImageCardView from './components/ImageCardView';

export const CARD_NAME = 'ImageCard';

export default createCard({
  name: CARD_NAME,
  renderWith: ImageCardView,
});
