import React, { createContext, useContext } from 'react';

export const PluginOptions = createContext();

export const { Provider } = PluginOptions;
export const usePluginOptions = () => useContext(PluginOptions);
export const withPluginOptions = Comp => props => (
  <PluginOptions.Consumer>
    {options => <Comp {...props} pluginOptions={options} />}
  </PluginOptions.Consumer>
);
