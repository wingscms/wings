import createDesignConfig from './design';
import typography from '../../lib/typography';

export default ({ design }) => ({
  ...createDesignConfig(design),
  typography,
});
