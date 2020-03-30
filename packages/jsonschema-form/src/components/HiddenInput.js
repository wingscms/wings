import React from 'react';

export default props => (
  <input
    type="hidden"
    id={props.id}
    value={typeof value === 'undefined' ? '' : props.value}
    {...props}
  />
);
