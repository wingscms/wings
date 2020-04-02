import React from 'react';
import { ThemeProvider as _ThemeProvider, useTheme as _useTheme } from '../lib/styled';
import Theme from './Theme';

export default Theme;

const getThemeInstance = theme => (theme instanceof Theme ? theme : Theme.instance());

export const t = cb => ({ theme, ...props }) => cb(getThemeInstance(theme), props);

export const useTheme = () => {
  const theme = _useTheme();
  return getThemeInstance(theme);
};

export const ThemeProvider = ({ theme, ...props }) => (
  <_ThemeProvider {...props} theme={getThemeInstance(theme)} />
);
