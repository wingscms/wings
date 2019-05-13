import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as PluginOptionsProvider } from '../src/ctx/PluginOptions';
import createTheme from './theme';
import GlobalStyles from '../src/styles/global';

export default ({ element }, pluginOptions) => {
  const { design, typography } = pluginOptions;
  return (
    <ThemeProvider theme={createTheme({ design, typography })}>
      <PluginOptionsProvider value={pluginOptions}>
        <React.Fragment>
          <GlobalStyles />
          {element}
        </React.Fragment>
      </PluginOptionsProvider>
    </ThemeProvider>
  );
};
