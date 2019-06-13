import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

FormattedMessage.propTypes = {
  ...FormattedMessage.propTypes,
  tagName: PropTypes.any,
};
/*
PropType validation for tagName does not allow for class components
even though it is a supported feature.
-> https://github.com/formatjs/react-intl/blob/22e49892a3130922900cd3d5a9cca73733723a98/src/components/message.js#L37
*/
