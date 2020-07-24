import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ id = 'wings-components-portal', children }) {
  const portal = useRef(document.getElementById(id) || document.createElement('div'));
  if (!portal.current.parentElement) {
    portal.current.id = id;
    document.body.append(portal.current);
  }
  return createPortal(children, portal.current);
}
