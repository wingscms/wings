import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ id = 'wings-components-portal', children, zIndex = 100 }) {
  if (typeof document === 'undefined') return null;
  const portal = useRef(document.getElementById(id) || document.createElement('div'));

  if (zIndex !== portal.current.style.zIndex) {
    portal.current.setAttribute('style', `position: relative; z-index: ${zIndex};`);
  }

  if (!portal.current.parentElement) {
    portal.current.id = id;
    document.body.append(portal.current);
  }

  return createPortal(children, portal.current);
}
