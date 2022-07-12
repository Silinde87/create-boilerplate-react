import React, { createContext } from 'react';

const ReactContext = createContext();

const useReactContext = () => {
  const context = React.useContext(ReactContext);
  if (!context) {
    throw new Error('useReactContext must be used within a ReactContextProvider');
  }
  return context;
};

export { ReactContext, useReactContext };
