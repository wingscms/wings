import React from 'react';

export default function insertLink(obj, link) {
  return typeof obj !== 'object'
    ? obj
    : Object.keys(obj).map(
      key =>
        (key === 'link' ? (
          <a key={key} href={link} target="_blank" rel="noopener noreferrer">
            {obj[key]}
          </a>
        ) : (
          obj[key]
        )),
    );
}
