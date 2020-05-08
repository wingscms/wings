import React from 'react';
import { paramCase } from 'param-case';
import icons from './icons';

const ICONS = Object.keys(icons).reduce(
  (_icons, iconName) => ({ ..._icons, [paramCase(iconName)]: icons[iconName] }),
  {},
);

export default function Icon({ icon, ...props }) {
  return React.createElement(ICONS[icon], props);
}

Icon.ICON_NAMES = Object.keys(ICONS);
