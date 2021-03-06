import React from 'react';
import SvgIcon from './SvgIcon';

export default (path, displayName, viewBox) => {
  const Icon = props => (
    <SvgIcon {...props} viewBox={viewBox || null}>
      {path}
    </SvgIcon>
  );

  Icon.displayName = `${displayName}Icon`;

  return Icon;
};
