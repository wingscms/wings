import PropTypes from 'prop-types';
import { SIZE, FLOAT } from './enums';

export default {
  mediaId: PropTypes.string.isRequired,
  url: PropTypes.string,
  src: PropTypes.string,
  large: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  size: PropTypes.number,
  float: PropTypes.number,
};

export const defaultProps = {
  mediaId: '',
  url: '',
  large: '',
  src: '',
  alt: '',
  caption: '',
  size: SIZE.LARGE,
  float: FLOAT.NONE,
};
