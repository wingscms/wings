import PropTypes from 'prop-types';
import { TYPE, FLOAT } from './enums';

export default {
  text: PropTypes.node.isRequired,
  source: PropTypes.string,
  sourceUrl: PropTypes.string,
  type: PropTypes.number,
  float: PropTypes.number,
};

export const defaultProps = {
  source: '',
  sourceUrl: '',
  type: TYPE.BLOCKQUOTE,
  float: FLOAT.NONE,
};
