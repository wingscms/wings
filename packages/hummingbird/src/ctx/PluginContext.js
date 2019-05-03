import React, { createContext, useContext } from 'react';

export const PluginContext = createContext();

export const { Provider } = PluginContext;
export const usePluginOptions = () => useContext(PluginContext);
export const withPluginOptions = Comp => props => (
  <PluginContext.Consumer>
    {options => <Comp {...props} pluginOptions={options} />}
  </PluginContext.Consumer>
);
