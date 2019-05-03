import React from 'react';
import { SvgIcon } from '../components/icons';

function createSvgIcon(path, displayName, viewBox) {
  const Icon = props => (
    <SvgIcon {...props} viewBox={viewBox || null}>
      {path}
    </SvgIcon>
  );

  Icon.displayName = `${displayName}Icon`;

  return Icon;
}

export default createSvgIcon;
