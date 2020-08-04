import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ id = 'wings-components-portal', children, zIndex = 100 }) {
  const portal = useRef(document.getElementById(id) || document.createElement('div'));
  if (!portal.current.parentElement) {
    portal.current.id = id;
    portal.current.setAttribute('style', `position: relative; z-index: ${zIndex};`);
    document.body.append(portal.current);
  }
  return createPortal(children, portal.current);
}
