import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as PluginOptionsProvider } from '../src/ctx/PluginContext';
import createTheme from './theme';

export default ({ element }, pluginOptions) => {
  const { design, typography } = pluginOptions;
  return (
    <ThemeProvider theme={createTheme({ design, typography })}>
      <PluginOptionsProvider value={pluginOptions}>{element}</PluginOptionsProvider>
    </ThemeProvider>
  );
};
