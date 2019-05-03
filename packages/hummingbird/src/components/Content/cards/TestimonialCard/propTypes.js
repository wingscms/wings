import PropTypes from 'prop-types';
import TYPE from './enums';

export default {
  type: PropTypes.number,
  title: PropTypes.string,
  intro: PropTypes.string,

  mediaId: PropTypes.string,
  src: 'http://via.placeholder.com/350x150.png',
  url: 'http://via.placeholder.com/350x150.png',

  content: PropTypes.string,
};

export const defaultProps = {
  type: TYPE.INTERVIEW,
  title: '',
  intro: '',
  mediaId: '',
  src: '',
  url: '',
  content: '',
};
