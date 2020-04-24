import React, { createContext, useContext } from 'react';

export default ({ propName = 'value', initialValue = null } = {}) => {
  const Context = createContext(initialValue);

  return {
    Context,
    Provider: ({ value, children }) => (
      <Context.Provider value={value}>{children}</Context.Provider>
    ),
    hook: () => useContext(Context),
    hoc: () => Component => props => (
      <Context.Consumer>
        {value => <Component {...props} {...{ [propName]: value }} />}
      </Context.Consumer>
    ),
  };
};
