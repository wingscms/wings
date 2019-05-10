import React from 'react';
import DOMContent from './DOMContent';
import ReactContent from './ReactContent';

export default ({ _useExperimentalReactRenderer: useReact, ...props }) =>
  (useReact ? <ReactContent {...props} /> : <DOMContent {...props} />);
