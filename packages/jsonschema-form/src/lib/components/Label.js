import React from 'react';

export default function Label({ htmlFor, label, required }) {
  return (
    <label htmlFor={htmlFor}>
      {label}
      {required ? '*' : ''}
    </label>
  );
}
