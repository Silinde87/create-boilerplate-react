import { useState } from 'react';
import { ReactContext } from './Context';

const initContext = {};

const ReactContextProvider = ({ children }) => {
  const [context, setContext] = useState(initContext);
  return <ReactContext.Provider value={{ context, setContext }}>{children}</ReactContext.Provider>;
};

export { ReactContextProvider };
