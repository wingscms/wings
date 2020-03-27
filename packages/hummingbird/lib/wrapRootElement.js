import './bootstrap';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { WingsProvider } from '@wingscms/react';
import { Provider as PluginOptionsProvider } from '../src/ctx/PluginOptions';
import createTheme from './theme';
import GlobalStyles from '../src/styles/global';
import wings from '../src/data/wings';

export default ({ element }, pluginOptions) => {
  const { design, typography } = pluginOptions;
  return (
    <WingsProvider client={wings}>
      <ThemeProvider theme={createTheme({ design, typography })}>
        <PluginOptionsProvider value={pluginOptions}>
          <>
            <GlobalStyles />
            {element}
          </>
        </PluginOptionsProvider>
      </ThemeProvider>
    </WingsProvider>
  );
};
