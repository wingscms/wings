import React from 'react';
import fP from 'filter-invalid-dom-props';

export default ({ children, viewBox = '0 0 24 24', ...props }) => {
  return (
    <svg focusable="false" viewBox={viewBox} {...fP(props)}>
      {children}
    </svg>
  );
};
