import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme';

export default ({ theme, ...props }) => (
  <ThemeProvider theme={theme instanceof Theme ? theme : new Theme(theme)} {...props} />
);
