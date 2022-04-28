import { createContext, useContext } from 'react';

const ReactContext = createContext();

export const ContextProvider = ReactContext.Provider;
export const ContextConsumer = ReactContext.Consumer;
export const useReactContext = () => useContext(ReactContext);
export default ReactContext;
