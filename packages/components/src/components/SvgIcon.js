import React from 'react';
import classNameFromString from '../lib/utils/classNameFromString';
import randomString from '../lib/utils/randomString';

export default ({
  children,
  component: Component = 'svg',
  title,
  viewBox = '0 0 24 24',
  ...props
}) => {
  const ariaLabelledby = title ? `${randomString()}-${classNameFromString(title)}` : null;
  return (
    <Component
      focusable="false"
      viewBox={viewBox}
      aria-hidden={title ? 'false' : 'true'}
      role={title ? 'img' : 'presentation'}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
      {title ? <title id={ariaLabelledby}>{title}</title> : null}
    </Component>
  );
};
