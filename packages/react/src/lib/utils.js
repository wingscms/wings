import _slugify from 'slugify';
import React from 'react';

export const slugify = s =>
  _slugify(s, {
    remove: /[$*_+~.()'"!\-:@]/g,
    lower: true,
  });

export const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};

export const isJSON = item => {
  item = typeof item !== 'string' ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch {
    return false;
  }

  if (typeof item === 'object' && item !== null) {
    return true;
  }

  return false;
};

export const wrapLink = LinkWrap => Link => {
  if (LinkWrap) {
    return ({ href, children, ...props }) => (
      <LinkWrap href={href} {...props}>
        <Link>{children}</Link>
      </LinkWrap>
    );
  }
  return ({ href, children, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
