import React from 'react';
import Button from './Button';

export default function AnchorButton(props) {
  const { disabled, href, tabIndex } = props;
  return (
    <Button
      as="a"
      role="button"
      {...props}
      href={disabled ? undefined : href}
      tabIndex={disabled ? -1 : tabIndex}
    />
  );
}
