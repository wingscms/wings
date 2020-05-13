import React, { createContext, useContext } from 'react';

const WingsContext = createContext(null);

export default function WingsProvider({ client, children }) {
  return <WingsContext.Provider value={client}>{children}</WingsContext.Provider>;
}

export const useWings = () => useContext(WingsContext);

export const withWings = Comp => props => (
  <WingsContext.Consumer>{client => <Comp {...props} wings={client} />}</WingsContext.Consumer>
);
